#!/bin/bash

# 使用 identify 获取图片信息并逐行处理
identify page*/* 2>/dev/null | while IFS= read -r line; do
    # 提取文件名和分辨率
    filename=$(echo "$line" | awk '{print $1}')
    resolution=$(echo "$line" | awk '{print $3}')
    
    # 从分辨率中提取宽度（格式如 643x360）
    width=$(echo "$resolution" | cut -d'x' -f1)
    hight=$(echo "$resolution" | cut -d'x' -f2)
    
    # 检查宽度是否为数字且大于 1000
    if [[ "$width" =~ ^[0-9]+$ && "$width" -gt 1000 ]]; then
        echo "$filename (Width: $width)"
    fi
    echo "$filename $width $hight"
done
