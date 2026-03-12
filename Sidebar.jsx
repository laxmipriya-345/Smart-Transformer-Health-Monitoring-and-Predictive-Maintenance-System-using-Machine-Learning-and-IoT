import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Activity, 
  Brain, 
  AlertTriangle, 
  Info,
  Gauge
} from 'lucide-react';

function Sidebar() {
  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/monitoring', icon: Activity, label: 'Sensor Monitoring' },
    { path: '/prediction', icon: Brain, label: 'Prediction' },
    { path: '/alerts', icon: AlertTriangle, label: 'Alerts' },
    { path: '/system-info', icon: Info, label: 'System Info' },
  ];

  return (
    <aside className="sidebar">
      <div className="live-data-card">
        <div className="live-data-header">
          <div className="live-data-dot"></div>
          <span>Live Data Feed</span>
        </div>
        <div className="live-data-grid">
          <div>
            <div className="live-data-label">Temp:</div>
            <div className="live-data-value">45.2°C</div>
          </div>
          <div>
            <div className="live-data-label">RPM:</div>
            <div className="live-data-value">1450</div>
          </div>
        </div>
      </div>

      <nav className="nav-menu">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `nav-item ${isActive ? 'active' : ''}`
            }
          >
            <item.icon />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="uptime-card">
        <Gauge className="uptime-icon" size={20} />
        <div>
          <div className="uptime-label">System Uptime</div>
          <div className="uptime-value">14d 6h 23m</div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;