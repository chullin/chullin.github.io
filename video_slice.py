import subprocess
import os

# 原始影片路徑
input_path = r"./fullVideo/Dify.mp4"

# 輸出資料夾
output_dir = r"./video_segments/Dify"
os.makedirs(output_dir, exist_ok=True)

# 每段影片秒數（可自行調整）
segment_time = 10  # 每段 10 秒，可改成 5、15 等

# 輸出的 m3u8 清單檔路徑
output_m3u8 = os.path.join(output_dir, "Difyplaylist.m3u8")

# ffmpeg 命令
# -codec copy：不重新壓縮，加快速度
# -start_number 0：從第0段開始
# -hls_time：設定每段長度（秒）
# -hls_list_size 0：完整列出所有分段
# -f hls：輸出 HLS 格式
cmd = [
    "ffmpeg",
    "-i", input_path,
    "-codec", "copy",
    "-start_number", "0",
    "-hls_time", str(segment_time),
    "-hls_list_size", "0",
    "-f", "hls",
    output_m3u8
]

# 執行 ffmpeg
subprocess.run(cmd, check=True)

print(f"✅ 轉檔完成！已輸出到：{output_dir}")
print(f"主要播放清單檔案：{output_m3u8}")
