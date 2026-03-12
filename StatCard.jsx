import React from 'react';

function StatCard({ title, value, unit, icon: Icon, trend, color = 'accent' }) {
  const getTrendClass = (trend) => {
    if (trend > 0) return 'trend-up';
    if (trend < 0) return 'trend-down';
    return '';
  };

  return (
    <div className="stat-card">
      <div className="stat-header">
        <span className="stat-title">{title}</span>
        <div className={`stat-icon ${color}`}>
          <Icon size={20} />
        </div>
      </div>
      <div className="stat-main">
        <span className="stat-value">{value}</span>
        <span className="stat-unit">{unit}</span>
      </div>
      {trend !== undefined && (
        <div className={`stat-trend ${getTrendClass(trend)}`}>
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% vs last hour
        </div>
      )}
    </div>
  );
}

export default StatCard;