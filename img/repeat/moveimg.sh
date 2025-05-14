#!/bin/bash

# 检查 temp 目录是否存在
if [ ! -d "temp" ]; then
    echo "Error: temp directory not found!"
    exit 1
fi

# 获取所有图片文件（假设为常见图片格式）
temp_images=$(find temp -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.bmp" -o -iname "*.webp" \))
if [ -z "$temp_images" ]; then
    echo "No images found in temp directory!"
    exit 0
fi

# 计算 temp 目录中的图片数量
total_images=$(echo "$temp_images" | wc -l)
echo "Found $total_images images in temp directory."

# 获取现有的 page* 目录并按数字排序
page_dirs=$(ls -d page* 2>/dev/null | grep -E '^page[0-9]+$' | sort -V)
if [ -z "$page_dirs" ]; then
    echo "No page* directories found, creating page1..."
    mkdir page1
    page_dirs="page1"
fi

# 获取最后一个 page 目录的编号
last_page_num=$(echo "$page_dirs" | tail -n 1 | grep -o '[0-9]\+')
if [ -z "$last_page_num" ]; then
    last_page_num=0
fi

# 遍历 temp 中的图片并分配
image_index=0
for image in $temp_images; do
    # 跳过非文件（预防性检查）
    if [ ! -f "$image" ]; then
        continue
    fi

    # 检查现有 page* 目录，优先填充不满 20 张的文件夹
    filled=false
    for page_dir in $page_dirs; do
        # 统计当前 page_dir 中的图片数量
        current_count=$(find "$page_dir" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.bmp" -o -iname "*.webp" \) | wc -l)
        
        # 如果当前文件夹图片少于 20 张，移动图片到此文件夹
        if [ "$current_count" -lt 20 ]; then
            mv "$image" "$page_dir/"
            echo "Moved $(basename "$image") to $page_dir"
            filled=true
            break
        fi
    done

    # 如果所有现有 page* 目录都已满 20 张，创建新目录
    if [ "$filled" = false ]; then
        new_page_num=$((last_page_num + 1))
        new_page_dir="page${new_page_num}"
        mkdir "$new_page_dir"
        echo "Created $new_page_dir"
        mv "$image" "$new_page_dir/"
        echo "Moved $(basename "$image") to $new_page_dir"
        last_page_num=$new_page_num
        page_dirs="$page_dirs $new_page_dir"
    fi

    # 更新图片索引
    ((image_index++))
done

# 检查 temp 目录是否为空
remaining_images=$(find temp -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.bmp" -o -iname "*.webp" \))
if [ -z "$remaining_images" ]; then
    echo "All images have been distributed."
else
    echo "Warning: Some images remain in temp directory."
fi

# 检查每个 page* 目录的图片数量是否为 20 张
for page_dir in $page_dirs; do
    count=$(find "$page_dir" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.bmp" -o -iname "*.webp" \) | wc -l)
    if [ "$count" -ne 20 ]; then
        echo "Warning: $page_dir contains $count images, not 20."
    else
        echo "$page_dir contains exactly 20 images."
    fi
done
