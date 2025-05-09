#!/bin/bash

# Exit on error
set -e

# Find all page* directories in the current directory
for dir in ./page*/; do
    # Check if directory exists
    if [[ -d "$dir" ]]; then
        echo "Processing directory: $dir"
        
        # Iterate over all files in the directory
        for file in "$dir"*; do
            # Check if it's a regular file
            if [[ -f "$file" ]]; then
                # Get filename and extension
                filename=$(basename "$file")
                extension="${filename##*.}"
                name_without_ext="${filename%.*}"

                # Check if filename (without extension) is already a 32-char hexadecimal MD5 hash
                if [[ $name_without_ext =~ ^[0-9a-fA-F]{32}$ ]]; then
                    echo "Skipping $file: filename is already MD5-like"
                    continue
                fi
                
                # Compute MD5 hash of the filename (not content)
                md5_hash=$(echo -n "$filename" | md5sum | cut -d' ' -f1)
                
                # Construct new filename
                new_filename="${md5_hash}.${extension}"
                new_filepath="${dir}${new_filename}"
                
                # Check if new filename already exists to avoid overwriting
                if [[ -e "$new_filepath" ]]; then
                    echo "Warning: $new_filepath already exists, skipping $file"
                    continue
                fi
                
                # Rename the file
                mv -v "$file" "$new_filepath"
            fi
        done

        # Extract directory name (e.g., page1)
        dirname=$(basename "$dir")
        
        # Initialize JSON array
        json_array="["
        first_file=true
        
        # Collect original filenames for JSON
        for file in "$dir"*; do
            if [[ -f "$file" ]]; then
                filename=$(basename "$file")
                # Construct URL
                url="https://static.0bm.com/img/repeat/$dirname/$filename"
                # Append to JSON array
                if [[ "$first_file" = true ]]; then
                    json_array="$json_array\"$url\""
                    first_file=false
                else
                    json_array="$json_array, \"$url\""
                fi
            fi
        done
        
        # Close JSON array
        json_array="$json_array]"
        
        # Write JSON to file (e.g., page1.json) if there are files
        json_file="./$dirname.json"
        if [[ "$json_array" != "[]" ]]; then
            if [[ -e "$json_file" ]]; then
                echo "Warning: $json_file already exists, skipping JSON generation"
            else
                echo "$json_array" > "$json_file"
                echo "Generated JSON: $json_file"
            fi
        else
            echo "No files in $dir, skipping JSON generation"
        fi
    else
        echo "No page* directories found"
    fi
done

mv *.json ../../data/repeat/

echo "Renaming complete"
