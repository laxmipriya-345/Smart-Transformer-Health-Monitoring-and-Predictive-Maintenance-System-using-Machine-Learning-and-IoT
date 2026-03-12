import { AlertTriangle, Info, CheckCircle } from 'lucide-react';

function AlertCard({ time, level, message, type = 'warning' }) {
  const getIcon = () => {
    switch(type) {
      case 'critical':
        return <AlertTriangle size={20} />;
      case 'warning':
        return <AlertTriangle size={20} />;
      default:
        return <Info size={20} />;
    }
  };

  return (
    <div className={`alert-card ${type}`}>
      <div className={`alert-icon-wrapper ${type}`}>
        {getIcon()}
      </div>
      <div className="alert-content">
        <div className="alert-header">
          <span className={`alert-level ${type}`}>{level}</span>
          <span className="alert-time">{time}</span>
        </div>
        <p className="alert-message">{message}</p>
      </div>
    </div>
  );
}

export default AlertCard;