const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/dashboard", (req, res) => {
  res.json({
  cpu_usage: 42,
  memory_usage: 68,
  threat_level: "LOW",
  active_services: 3,

  battery: {
    battery_percent: 91,
    charging: false
  },

  disk_usage: {
    disk_percent: 54,
    disk_used_gb: 256,
    disk_total_gb: 512
  },

  network_usage: {
    bytes_sent_mb: 23
  },

  system_uptime_hours: 12,

  running_processes: [
    { pid: 1234, name: "chrome.exe" },
    { pid: 2345, name: "node.exe" },
    { pid: 3456, name: "explorer.exe" }
  ],

  logs: [
    "Application started",
    "Backend connected",
    "Monitoring active"
  ],

  alerts: [
    "No critical threats detected"
  ]
});
});

app.listen(8080, () => {
  console.log("Backend running on http://localhost:8080");
});