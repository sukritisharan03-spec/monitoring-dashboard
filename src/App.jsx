import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import DashboardCards from "./components/DashboardCards";
import ServiceStatus from "./components/ServiceStatus";
import SystemLogs from "./components/SystemLogs";
import SecurityAlerts from "./components/SecurityAlerts";
import VulnerabilitySummary from "./components/VulnerabilitySummary";

function App() {

  const [cpu, setCpu] = useState(0);
  const [memory, setMemory] = useState(0);
  const [threat, setThreat] = useState("LOW");
  const [services, setServices] = useState(0);

  const [battery, setBattery] = useState(null);
  const [disk, setDisk] = useState(null);
  const [network, setNetwork] = useState(null);
  const [uptime, setUptime] = useState(0);
  const [processes, setProcesses] = useState([]);

  const [lastUpdated, setLastUpdated] = useState("");
  const [logs, setLogs] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const [serviceStatus, setServiceStatus] = useState({
    frontend: "Running",
    backend: "Running",
    database: "Running"
  });

  const [vulnerabilities, setVulnerabilities] = useState({
    critical: 0,
    medium: 0,
    low: 0
  });


  useEffect(() => {

    const fetchData = () => {
fetch("/api/dashboard")
        .then((res)=>res.json())
        .then((data)=>{

          console.log("BACKEND DATA:", data);

          setCpu(data.cpu_usage ?? 0);
          setMemory(data.memory_usage ?? 0);
          setThreat(data.threat_level ?? "LOW");
          setServices(data.active_services ?? 0);

          setBattery(data.battery);
          setDisk(data.disk_usage);
          setNetwork(data.network_usage);

          setUptime(data.system_uptime_hours ?? 0);

          setProcesses(
            data.running_processes ?? []
          );

          setLogs(
            data.logs ?? []
          );

          setAlerts(
            data.alerts ?? []
          );


          setLastUpdated(
            new Date().toLocaleTimeString()
          );


          setVulnerabilities({
            critical: Math.floor(Math.random()*3),
            medium: Math.floor(Math.random()*6),
            low: Math.floor(Math.random()*10)
          });

        })
        .catch((err)=>{
          console.log("BACKEND ERROR",err);
        });

    };


    fetchData();

    const interval =
      setInterval(fetchData,2000);


    return ()=>clearInterval(interval);


  },[]);



  return (

    <div className="dashboard">

      <Header />


      <DashboardCards
        cpu={cpu}
        memory={memory}
        services={services}
        threat={threat}
      />



      <div className="section">

        <h2>System Metrics</h2>


        <div className="cards">


          <div className="card">
            <h3>Battery</h3>
            <h2>
              {battery?.battery_percent ?? "N/A"}%
            </h2>

            <p>
              {battery?.charging
              ?"Charging"
              :"Not Charging"}
            </p>

          </div>



          <div className="card">

            <h3>Disk Usage</h3>

            <h2>
              {disk?.disk_percent ?? 0}%
            </h2>

            <p>
              {disk?.disk_used_gb} GB /
              {disk?.disk_total_gb} GB
            </p>

          </div>



          <div className="card">

            <h3>Network Sent</h3>

            <h2>
              {network?.bytes_sent_mb ?? 0} MB
            </h2>

          </div>



          <div className="card">

            <h3>Uptime</h3>

            <h2>
              {uptime} hrs
            </h2>

          </div>


        </div>

      </div>




      <ServiceStatus
        serviceStatus={serviceStatus}
      />


      <SystemLogs logs={logs}/>


      <SecurityAlerts alerts={alerts}/>


      <VulnerabilitySummary
        vulnerabilities={vulnerabilities}
      />



      <div className="section">

        <h2>Running Processes</h2>

        <div className="card">

        {
          processes.map((p)=>(
            <div key={p.pid}>
              {p.pid} - {p.name}
            </div>
          ))
        }

        </div>

      </div>




      <div className="section">

      <h2>System Status</h2>


      <div
      style={{
        display:"flex",
        justifyContent:"space-between",
        padding:"15px",
        background:"#1e293b",
        borderRadius:"10px"
      }}
      >


      <div>

      <p>
      Dashboard Status
      </p>

      <h3 style={{color:"#22c55e"}}>
      LIVE MONITORING
      </h3>

      </div>



      <div>

      <p>
      Last Updated
      </p>

      <h3>
      {lastUpdated}
      </h3>

      </div>


      </div>


      </div>



      <div className="footer">

      Monitoring Dashboard v1.0

      </div>


    </div>

  );

}

export default App;