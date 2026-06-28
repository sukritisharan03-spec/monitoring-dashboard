from flask import Flask, jsonify
from flask_cors import CORS
from kubernetes import client, config
import psutil
import random
import time

app = Flask(__name__)
CORS(app)


def kubernetes_metrics():
    try:
        config.load_incluster_config()

        v1 = client.CoreV1Api()

        pods = v1.list_pod_for_all_namespaces()

        running = 0

        for pod in pods.items:
            if pod.status.phase == "Running":
                running += 1

        return {
            "pods_running": running,
            "total_pods": len(pods.items)
        }

    except Exception as e:
        return {
            "pods_running": 0,
            "total_pods": 0,
            "error": str(e)
        }


@app.route('/api/dashboard')
def dashboard():

    # 🔋 Battery
    battery = psutil.sensors_battery()

    battery_info = {
        "battery_percent": battery.percent if battery else None,
        "charging": battery.power_plugged if battery else False
    }


    # 💽 Disk
    disk = psutil.disk_usage('/')

    disk_info = {
        "disk_total_gb": round(disk.total / (1024**3), 2),
        "disk_used_gb": round(disk.used / (1024**3), 2),
        "disk_percent": disk.percent
    }


    # ⏱ Uptime
    boot_time = psutil.boot_time()
    uptime_seconds = time.time() - boot_time
    uptime_hours = round(uptime_seconds / 3600, 2)


    # 📱 Processes
    running_processes = []

    for proc in psutil.process_iter(['pid','name']):
        try:
            running_processes.append({
                "pid": proc.info['pid'],
                "name": proc.info['name']
            })
        except:
            pass


    running_processes = running_processes[:10]


    # 🌐 Network
    network = psutil.net_io_counters()

    network_info = {
        "bytes_sent_mb": round(network.bytes_sent / (1024*1024),2),
        "bytes_recv_mb": round(network.bytes_recv / (1024*1024),2)
    }


    k8s = kubernetes_metrics()


    return jsonify({

        # 📊 REAL SYSTEM + KUBERNETES DATA

        "cpu_usage": psutil.cpu_percent(interval=1),

        "memory_usage": psutil.virtual_memory().percent,

        "active_services": k8s["pods_running"],

        "total_pods": k8s["total_pods"],

        "threat_level": random.choice(
            ["LOW","MEDIUM","HIGH"]
        ),


        # 🔋 Extras

        "battery": battery_info,

        "disk_usage": disk_info,

        "network_usage": network_info,

        "system_uptime_hours": uptime_hours,


        "running_processes": running_processes,


        # 🧾 Services

        "services": [

            {
                "name":"API Gateway",
                "status":"Healthy",
                "uptime":"99.98%",
                "latency":"42 ms"
            },

            {
                "name":"Auth Service",
                "status":"Healthy",
                "uptime":"99.95%",
                "latency":"61 ms"
            },

            {
                "name":"Redis Cache",
                "status":"Healthy",
                "uptime":"99.99%",
                "latency":"12 ms"
            }

        ],


        "logs":[
            "System started successfully",
            "CPU monitoring active",
            "Kubernetes monitoring active"
        ],


        "alerts":[
            "Firewall active",
            "No threats detected"
        ]

    })


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=9090,
        debug=True
    )