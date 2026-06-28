function SystemLogs({ logs }) {
  return (
    <div className="section">
      <h2>System Logs</h2>

      <div className="logs">
        {logs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
    </div>
  );
}

export default SystemLogs;