#!/bin/bash

# 检查 list.txt 是否存在
if [ ! -f "list.txt" ]; then
    echo "Error: list.txt not found!"
    exit 1
fi

# 使用 xargs 以 10 个并发进程下载图片
cat list.txt | xargs -n 1 -P 10 wget -q --show-progress --tries=3 --timeout=10 --no-clobber

echo "Download completed!"
