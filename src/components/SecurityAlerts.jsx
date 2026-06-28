function SecurityAlerts({ alerts }) {
  return (
    <div className="section">
      <h2>Security Alerts</h2>

      {alerts.map((alert, index) => (
        <p key={index}>{alert}</p>
      ))}
    </div>
  );
}

export default SecurityAlerts;