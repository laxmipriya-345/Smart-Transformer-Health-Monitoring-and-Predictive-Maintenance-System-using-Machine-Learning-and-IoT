import { useState, useEffect } from 'react';
import { Thermometer, Gauge, Zap, AlertTriangle, Activity, Clock } from 'lucide-react';
import StatCard from '../components/StatCard';
import SensorChart from '../components/SensorChart';

function Dashboard() {
  const [liveData, setLiveData] = useState({
    temperature: 45.2,
    rpm: 1450,
    torque: 38.5,
    failureProb: 0.23
  });

  const [chartData, setChartData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [lastPredictionTime, setLastPredictionTime] = useState(new Date());

  // Calculate health score (inverse of failure probability)
  const healthScore = ((1 - liveData.failureProb) * 100).toFixed(1);

  // Determine status based on health score
  const getSystemStatus = () => {
    if (healthScore >= 80) return { text: 'NORMAL', class: 'status-healthy-text' };
    if (healthScore >= 60) return { text: 'WARNING', class: 'status-warning-text' };
    return { text: 'CRITICAL', class: 'status-critical-text' };
  };

  // Determine risk level
  const getRiskLevel = () => {
    if (liveData.failureProb < 0.3) return { text: 'Low Risk', class: 'success' };
    if (liveData.failureProb < 0.7) return { text: 'Medium Risk', class: 'warning' };
    return { text: 'High Risk', class: 'danger' };
  };

  useEffect(() => {
    // Simulate real-time data
    const interval = setInterval(() => {
      const newFailureProb = Math.random() * 0.5;
      
      setChartData(prev => {
        const newData = [...prev, {
          time: new Date().toLocaleTimeString(),
          temperature: 45 + Math.random() * 5,
          rpm: 1450 + Math.random() * 100,
          health: (1 - newFailureProb) * 100,
        }];
        if (newData.length > 20) newData.shift();
        return newData;
      });

      setLiveData({
        temperature: 45 + Math.random() * 2,
        rpm: 1450 + Math.random() * 50,
        torque: 38 + Math.random() * 3,
        failureProb: newFailureProb,
      });
      
      setLastUpdated(new Date());
      setLastPredictionTime(new Date());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusClass = () => {
    if (liveData.failureProb > 0.7) return 'status-critical';
    if (liveData.failureProb > 0.4) return 'status-warning';
    return 'status-healthy';
  };

  const getStatusText = () => {
    if (liveData.failureProb > 0.7) return 'CRITICAL';
    if (liveData.failureProb > 0.4) return 'WARNING';
    return 'HEALTHY';
  };

  const systemStatus = getSystemStatus();
  const riskLevel = getRiskLevel();

  return (
    <div>
      <div className="dashboard-header">
        <div className="dashboard-title">
          <h1>Dashboard</h1>
          <p>Real-time transformer monitoring</p>
        </div>
        <div className="last-updated">
          <Activity size={16} />
          <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
        </div>
      </div>

      {/* Enhanced Status Bar with Health Metrics */}
      <div className="status-bar" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div className="status-left">
          <div className={`status-indicator ${getStatusClass()}`}></div>
          <div className="status-text">
            System Status: <span className={getStatusColorClass()}>{getStatusText()}</span>
          </div>
        </div>
        
        {/* Health Metrics Summary */}
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center', minWidth: '100px' }}>
            <div style={{ color: '#9ca3af', fontSize: '12px', marginBottom: '4px' }}>
              <Activity size={14} style={{ display: 'inline', marginRight: '4px' }} />
              Health Score
            </div>
            <div style={{ 
              fontSize: '24px', 
              fontWeight: 'bold', 
              color: healthScore >= 80 ? '#10b981' : healthScore >= 60 ? '#f59e0b' : '#ef4444' 
            }}>
              {healthScore}%
            </div>
          </div>
          
          <div style={{ textAlign: 'center', minWidth: '100px' }}>
            <div style={{ color: '#9ca3af', fontSize: '12px', marginBottom: '4px' }}>
              <AlertTriangle size={14} style={{ display: 'inline', marginRight: '4px' }} />
              Risk Level
            </div>
            <div style={{ 
              fontSize: '24px', 
              fontWeight: 'bold',
              color: riskLevel.class === 'success' ? '#10b981' : riskLevel.class === 'warning' ? '#f59e0b' : '#ef4444'
            }}>
              {(liveData.failureProb * 100).toFixed(1)}%
            </div>
          </div>
          
          <div style={{ textAlign: 'center', minWidth: '120px' }}>
            <div style={{ color: '#9ca3af', fontSize: '12px', marginBottom: '4px' }}>
              <Clock size={14} style={{ display: 'inline', marginRight: '4px' }} />
              Last Prediction
            </div>
            <div style={{ fontSize: '14px', fontWeight: '500', color: 'white' }}>
              {lastPredictionTime.toLocaleTimeString()}
            </div>
            <div style={{ fontSize: '11px', color: riskLevel.class === 'success' ? '#10b981' : riskLevel.class === 'warning' ? '#f59e0b' : '#ef4444' }}>
              {riskLevel.text}
            </div>
          </div>
        </div>

        {liveData.failureProb > 0.4 && (
          <div className="status-badge">
            <AlertTriangle size={16} />
            <span>Attention required</span>
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <StatCard
          title="Temperature"
          value={liveData.temperature.toFixed(1)}
          unit="°C"
          icon={Thermometer}
          trend={2.3}
          color={liveData.temperature > 50 ? 'danger' : 'accent'}
        />
        <StatCard
          title="Rotational Speed"
          value={Math.round(liveData.rpm)}
          unit="RPM"
          icon={Gauge}
          trend={-1.2}
          color="success"
        />
        <StatCard
          title="Torque"
          value={liveData.torque.toFixed(1)}
          unit="Nm"
          icon={Zap}
          trend={0.8}
          color="warning"
        />
        <StatCard
          title="Failure Probability"
          value={(liveData.failureProb * 100).toFixed(1)}
          unit="%"
          icon={AlertTriangle}
          trend={5.4}
          color={liveData.failureProb > 0.7 ? 'danger' : liveData.failureProb > 0.4 ? 'warning' : 'success'}
        />
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <SensorChart
          data={chartData}
          title="Temperature Trend"
          dataKey="temperature"
          stroke="#3b82f6"
          unit="°C"
        />
        <SensorChart
          data={chartData}
          title="RPM Trend"
          dataKey="rpm"
          stroke="#10b981"
          unit="RPM"
        />
      </div>

      {/* System Health Details Card */}
      <div style={{ 
        marginTop: '24px',
        backgroundColor: '#1a1f2e',
        border: '1px solid #2a3142',
        borderRadius: '12px',
        padding: '20px'
      }}>
        <h3 style={{ color: 'white', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Activity size={20} color="#3b82f6" />
          System Health Details
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px'
        }}>
          <div>
            <div style={{ color: '#9ca3af', fontSize: '13px', marginBottom: '4px' }}>Health Score</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ 
                width: '100%', 
                height: '8px', 
                backgroundColor: '#2a3142', 
                borderRadius: '4px',
                flex: 1
              }}>
                <div style={{ 
                  width: `${healthScore}%`, 
                  height: '100%', 
                  backgroundColor: healthScore >= 80 ? '#10b981' : healthScore >= 60 ? '#f59e0b' : '#ef4444',
                  borderRadius: '4px',
                  transition: 'width 0.3s ease'
                }}></div>
              </div>
              <span style={{ color: 'white', fontWeight: 'bold' }}>{healthScore}%</span>
            </div>
          </div>
          
          <div>
            <div style={{ color: '#9ca3af', fontSize: '13px', marginBottom: '4px' }}>System Status</div>
            <div style={{ 
              color: systemStatus.class === 'status-healthy-text' ? '#10b981' : 
                     systemStatus.class === 'status-warning-text' ? '#f59e0b' : '#ef4444',
              fontWeight: 'bold',
              fontSize: '16px'
            }}>
              {systemStatus.text}
            </div>
          </div>
          
          <div>
            <div style={{ color: '#9ca3af', fontSize: '13px', marginBottom: '4px' }}>Risk Assessment</div>
            <div style={{ 
              color: riskLevel.class === 'success' ? '#10b981' : 
                     riskLevel.class === 'warning' ? '#f59e0b' : '#ef4444',
              fontWeight: 'bold'
            }}>
              {(liveData.failureProb * 100).toFixed(1)}% - {riskLevel.text}
            </div>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="info-grid" style={{ marginTop: '24px' }}>
        <div className="info-card">
          <div className="info-label">Peak Temperature (24h)</div>
          <div className="info-value">52.3°C</div>
          <div className="info-sub success">↓ 2.1°C from yesterday</div>
        </div>
        <div className="info-card">
          <div className="info-label">Average RPM</div>
          <div className="info-value">1,432 RPM</div>
          <div className="info-sub">Normal range</div>
        </div>
        <div className="info-card">
          <div className="info-label">Maintenance Due</div>
          <div className="info-value">7 days</div>
          <div className="info-sub warning">Schedule inspection</div>
        </div>
      </div>
    </div>
  );
}

// Helper function for status color class
function getStatusColorClass() {
  // This would be defined based on your logic
  return 'status-healthy-text';
}

export default Dashboard;