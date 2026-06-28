function DashboardCards({
  cpu,
  memory,
  services,
  threat,
  battery,
  disk,
  network,
  uptime
}) {
  return (
    <div className="cards">
      <div className="card clickable">
        <h3>CPU Usage</h3>
        <h2>{cpu}%</h2>

        <div className="progress">
          <div
            className="progress-fill cpu"
            style={{ width: `${cpu}%` }}
          ></div>
        </div>
      </div>

      <div className="card clickable">
        <h3>Memory Usage</h3>
        <h2>{memory}%</h2>

        <div className="progress">
          <div
            className="progress-fill memory"
            style={{ width: `${memory}%` }}
          ></div>
        </div>
      </div>

      <div className="card clickable">
        <h3>Active Services</h3>
        <h2>{services} / 3</h2>
      </div>

      <div className="card clickable">
        <h3>Threat Level</h3>

        <h2
          style={{
            color:
              threat === "HIGH"
                ? "red"
                : threat === "MEDIUM"
                ? "orange"
                : "#22c55e"
          }}
        >
          {threat}
        </h2>
      </div>
    </div>
  );
}

export default DashboardCards;