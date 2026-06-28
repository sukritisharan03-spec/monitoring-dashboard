function ServiceStatus({ serviceStatus }) {
  return (
    <div className="section small-section">
      <h2>Service Status</h2>

      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Frontend</td>
            <td
              style={{
                color:
                  serviceStatus.frontend === "Running"
                    ? "#22c55e"
                    : "red"
              }}
            >
              {serviceStatus.frontend}
            </td>
          </tr>

          <tr>
            <td>Backend</td>
            <td
              style={{
                color:
                  serviceStatus.backend === "Running"
                    ? "#22c55e"
                    : "red"
              }}
            >
              {serviceStatus.backend}
            </td>
          </tr>

          <tr>
            <td>Database</td>
            <td
              style={{
                color:
                  serviceStatus.database === "Running"
                    ? "#22c55e"
                    : "red"
              }}
            >
              {serviceStatus.database}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ServiceStatus;