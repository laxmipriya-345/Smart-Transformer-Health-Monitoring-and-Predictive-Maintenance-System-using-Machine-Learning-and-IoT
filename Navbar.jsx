import { useState, useEffect } from 'react';
import { Wifi, WifiOff, Activity } from 'lucide-react';

function Navbar() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [wifiConnected] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">ST</div>
        <div className="project-info">
          <h1>SmartTransformer</h1>
          <p>Industrial IoT Monitoring System</p>
        </div>
      </div>

      <div className="navbar-right">
        <div className="time-display">
          <div className="time-date">{formatDate(currentTime)}</div>
          <div className="time-clock">{formatTime(currentTime)}</div>
        </div>

        <div className="status-icons">
          <div className={wifiConnected ? 'wifi-connected' : 'wifi-disconnected'}>
            {wifiConnected ? <Wifi size={18} /> : <WifiOff size={18} />}
            <span>{wifiConnected ? 'ESP32 Connected' : 'Disconnected'}</span>
          </div>

          <div className="system-status">
            <Activity size={18} color="#10b981" />
            <span>System Online</span>
            <div className="status-dot"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;