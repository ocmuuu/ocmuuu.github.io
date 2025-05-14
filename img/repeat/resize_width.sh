#!/bin/bash

# 目标宽度
TARGET_WIDTH=1000

# 使用 identify 获取图片信息并逐行处理
identify page*/*.webp 2>/dev/null | while IFS= read -r line; do
    # 提取文件名和分辨率
    filename=$(echo "$line" | awk '{print $1}')
    resolution=$(echo "$line" | awk '{print $3}')
    
    # 从分辨率中提取宽度
    width=$(echo "$resolution" | cut -d'x' -f1)
    
    # 检查宽度是否为数字且大于 TARGET_WIDTH
    if [[ "$width" =~ ^[0-9]+$ && "$width" -gt $TARGET_WIDTH ]]; then
        # 生成输出文件名（可覆盖原文件或另存）
        output="$filename"
        # 调整图片宽度
        magick "$filename" -resize "${TARGET_WIDTH}x" -quality 80 "$output"
        if [ $? -eq 0 ]; then
            echo "Resized: $filename (Width: $width -> $TARGET_WIDTH)"
        else
            echo "Failed to resize: $filename"
        fi
    fi
done
