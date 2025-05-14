#!/bin/bash

# 目标高度
TARGET_HEIGHT=480

# 使用 identify 获取 WebP 图片信息并逐行处理
identify page*/*.webp 2>/dev/null | while IFS= read -r line; do
    # 提取文件名和分辨率
    filename=$(echo "$line" | awk '{print $1}')
    resolution=$(echo "$line" | awk '{print $3}')
    
    # 从分辨率中提取高度
    height=$(echo "$resolution" | cut -d'x' -f2)
    
    # 检查高度是否为数字且大于 TARGET_HEIGHT
    if [[ "$height" =~ ^[0-9]+$ && "$height" -gt $TARGET_HEIGHT ]]; then
        # 输出文件名覆盖原文件
        output="$filename"
        # 调整图片高度
        magick "$filename" -resize "x${TARGET_HEIGHT}" -quality 80 "$output"
        if [ $? -eq 0 ]; then
            echo "Resized: $filename (Height: $height -> $TARGET_HEIGHT)"
        else
            echo "Failed to resize: $filename"
        fi
    fi
done
