import { useState } from 'react';
import { Bell, Filter, CheckCircle } from 'lucide-react';
import AlertCard from '../components/AlertCard';

function Alerts() {
  const [filter, setFilter] = useState('all');

  const alerts = [
    {
      id: 1,
      time: '14:23:45',
      level: 'CRITICAL',
      message: 'Temperature spike detected above 85°C',
      type: 'critical'
    },
    {
      id: 2,
      time: '13:15:22',
      level: 'WARNING',
      message: 'Vibration levels increasing',
      type: 'warning'
    },
    {
      id: 3,
      time: '11:47:08',
      level: 'INFO',
      message: 'Maintenance scheduled for tomorrow',
      type: 'info'
    },
    {
      id: 4,
      time: '09:32:17',
      level: 'WARNING',
      message: 'Torque deviation >15%',
      type: 'warning'
    },
    {
      id: 5,
      time: '08:15:33',
      level: 'INFO',
      message: 'System health check completed',
      type: 'info'
    },
  ];

  const filteredAlerts = filter === 'all' 
    ? alerts 
    : alerts.filter(a => a.type === filter);

  const getCriticalCount = () => {
    return alerts.filter(a => a.type === 'critical').length;
  };

  return (
    <div>
      <div className="alerts-header">
        <div className="dashboard-title">
          <h1>Alerts & Notifications</h1>
          <p>System events and warnings</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Bell size={20} color="#f59e0b" />
          <span style={{
            backgroundColor: '#ef4444',
            color: 'white',
            fontSize: '12px',
            padding: '2px 8px',
            borderRadius: '12px'
          }}>
            {getCriticalCount()}
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <Filter size={16} color="#9ca3af" />
        <div className="filter-buttons">
          <button
            onClick={() => setFilter('all')}
            className={`filter-btn ${filter === 'all' ? 'active' : 'all'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('critical')}
            className={`filter-btn ${filter === 'critical' ? 'active' : 'critical'}`}
          >
            Critical
          </button>
          <button
            onClick={() => setFilter('warning')}
            className={`filter-btn ${filter === 'warning' ? 'active' : 'warning'}`}
          >
            Warning
          </button>
          <button
            onClick={() => setFilter('info')}
            className={`filter-btn ${filter === 'info' ? 'active' : 'info'}`}
          >
            Info
          </button>
        </div>
      </div>

      <div className="alerts-list">
        {filteredAlerts.length === 0 ? (
          <div className="no-alerts">
            <CheckCircle size={48} />
            <p>No alerts to display</p>
          </div>
        ) : (
          filteredAlerts.map(alert => (
            <AlertCard
              key={alert.id}
              time={alert.time}
              level={alert.level}
              message={alert.message}
              type={alert.type}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Alerts;