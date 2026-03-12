import { useState, useEffect } from "react";
import { RefreshCw, Activity } from "lucide-react";
import SensorChart from "../components/SensorChart";

function Monitoring() {

  const [liveData, setLiveData] = useState([]);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {

    if (!autoRefresh) return;

    const interval = setInterval(() => {

      setLiveData(prev => {

        const newData = [
          ...prev,
          {
            time: new Date().toLocaleTimeString(),
            temperature: 40 + Math.random() * 15,
            voltage: 210 + Math.random() * 20,
            current: 10 + Math.random() * 5,
            oil: 70 + Math.random() * 10,
            vibration: 0.3 + Math.random() * 0.5,
            load: 60 + Math.random() * 20
          }
        ];

        if (newData.length > 30) newData.shift();

        return newData;

      });

      setLastUpdate(new Date());

    }, 3000);

    return () => clearInterval(interval);

  }, [autoRefresh]);

  return (

    <div>

      <div className="dashboard-header">
        <div className="dashboard-title">
          <h1>Sensor Monitoring</h1>
          <p>Real-time transformer sensor data</p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>

          <button
            onClick={() => setAutoRefresh(!autoRefresh)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              backgroundColor: autoRefresh
                ? "rgba(16,185,129,0.1)"
                : "#2a3142",
              color: autoRefresh ? "#10b981" : "#9ca3af",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            <RefreshCw size={16} className={autoRefresh ? "spinner" : ""} />
            <span>Auto Refresh</span>
          </button>

          <div className="last-updated">
            <Activity size={16} />
            <span>Last Update: {lastUpdate.toLocaleTimeString()}</span>
          </div>

        </div>
      </div>

      <div className="charts-grid">

        <SensorChart
          data={liveData}
          title="Temperature"
          dataKey="temperature"
          stroke="#ef4444"
          unit="°C"
        />

        <SensorChart
          data={liveData}
          title="Voltage"
          dataKey="voltage"
          stroke="#3b82f6"
          unit="V"
        />

        <SensorChart
          data={liveData}
          title="Current"
          dataKey="current"
          stroke="#10b981"
          unit="A"
        />

        <SensorChart
          data={liveData}
          title="Oil Level"
          dataKey="oil"
          stroke="#f59e0b"
          unit="%"
        />

        <SensorChart
          data={liveData}
          title="Vibration"
          dataKey="vibration"
          stroke="#8b5cf6"
          unit="mm/s"
        />

        <SensorChart
          data={liveData}
          title="Load"
          dataKey="load"
          stroke="#06b6d4"
          unit="%"
        />

      </div>

    </div>

  );
}

export default Monitoring;