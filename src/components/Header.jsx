import { useState, useEffect } from "react";

function Header() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header-box">
      <h1>Monitoring Dashboard</h1>

      <p>Real-time system monitoring & security overview</p>

      <p
        style={{
          marginTop: "10px",
          color: "#38bdf8",
          fontWeight: "bold"
        }}
      >
        Current Time: {time}
      </p>
    </div>
  );
}

export default Header;