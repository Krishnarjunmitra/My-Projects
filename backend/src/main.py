import sys

print(sys.path)

from flask import Flask, jsonify # type: ignore
from network_monitor import start_monitoring
from metrics_collector import get_metrics

app = Flask(__name__)


@app.route("/api/start", methods=["POST"])
def start():
    start_monitoring()
    return jsonify({"message": "Monitoring started"}), 200


@app.route("/api/metrics", methods=["GET"])
def metrics():
    metrics_data = get_metrics()
    return jsonify(metrics_data), 200


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
