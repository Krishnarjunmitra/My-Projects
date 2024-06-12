import psutil # type: ignore
import time

def start_monitoring():
    while True:
        net_io = psutil.net_io_counters()
        print(f"Bytes sent: {net_io.bytes_sent}, Bytes received: {net_io.bytes_recv}")
        time.sleep(5)
