#!/bin/bash

# Exit on error
set -e

# Find all page* directories in the current directory
for dir in ./page*/; do
    # Check if directory exists
    if [[ -d "$dir" ]]; then
        echo "Processing directory: $dir"

        # Extract directory name (e.g., page1)
        dirname=$(basename "$dir")

        # Rename files to MD5 hash of content
        for file in "$dir"*; do
            if [[ -f "$file" ]]; then
                # Get filename and extension
                filename=$(basename "$file")
                extension="${filename##*.}"
                name_without_ext="${filename%.*}"

                # Compute MD5 hash of the file content
                md5_hash=$(md5sum "$file" | cut -d' ' -f1)

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

        # Initialize JSON array
        json_array="["
        first_file=true

        # Collect original filenames for JSON
        for file in "$dir"*; do
            filename=$(basename "$file")
            # Construct URL
            url="http://static.0bm.com/img/repeat/$dirname/$filename"
            # Append to JSON array
            if [[ "$first_file" = true ]]; then
                json_array="$json_array\"$url\""
                first_file=false
            else
                json_array="$json_array, \"$url\""
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

echo "[" > page.json
ls -1 page[0-9]*.json | sort -V | sed 's/^/    "/;s/$/",/' | sed '$s/,$//' >> page.json
echo "]" >> page.json

echo "Processing complete"
