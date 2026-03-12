import { Info, Cpu, Thermometer, Gauge, Wifi, HardDrive, Activity } from 'lucide-react';

function SystemInfo() {
  return (
    <div>
      <div className="dashboard-header">
        <div className="dashboard-title">
          <h1>System Information</h1>
          <p>About SmartTransformer</p>
        </div>
      </div>

      <div className="info-grid-2col">
        <div className="info-section">
          <h2>
            <Info className="section-icon" size={20} />
            Project Overview
          </h2>
          <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>
            SmartTransformer is an industrial IoT monitoring system designed to predict 
            transformer failures using machine learning. The system continuously monitors 
            key parameters and provides real-time alerts to prevent unexpected downtime.
          </p>
          <div className="stats-mini-grid">
            <div className="stat-mini-card">
              <div className="stat-mini-value">98.5%</div>
              <div className="stat-mini-label">Prediction Accuracy</div>
            </div>
            <div className="stat-mini-card">
              <div className="stat-mini-value">24/7</div>
              <div className="stat-mini-label">Monitoring</div>
            </div>
          </div>
        </div>

        <div className="info-section">
          <h2>
            <Cpu className="section-icon" size={20} />
            Hardware Components
          </h2>
          <div className="hardware-list">
            <div className="hardware-item">
              <Wifi className="hardware-icon" size={20} />
              <div className="hardware-info">
                <h3>ESP32 Microcontroller</h3>
                <p>Dual-core, WiFi/Bluetooth</p>
              </div>
            </div>
            <div className="hardware-item">
              <Thermometer className="hardware-icon" size={20} />
              <div className="hardware-info">
                <h3>Temperature Sensors</h3>
                <p>DS18B20, Range: -55°C to 125°C</p>
              </div>
            </div>
            <div className="hardware-item">
              <Gauge className="hardware-icon" size={20} />
              <div className="hardware-info">
                <h3>Vibration Sensors</h3>
                <p>MPU6050, 3-axis accelerometer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="info-section" style={{ gridColumn: 'span 2' }}>
          <h2>
            <Activity className="section-icon" size={20} />
            System Architecture
          </h2>
          <div className="architecture-grid">
            <div className="arch-card">
              <div className="arch-emoji">📊</div>
              <h3>Data Collection</h3>
              <p>ESP32 sensors collect real-time data</p>
            </div>
            <div className="arch-card">
              <div className="arch-emoji">🧠</div>
              <h3>ML Processing</h3>
              <p>LSTM model predicts failures</p>
            </div>
            <div className="arch-card">
              <div className="arch-emoji">📱</div>
              <h3>Visualization</h3>
              <p>React dashboard with alerts</p>
            </div>
          </div>
        </div>

        <div className="info-section">
          <h2>
            <HardDrive className="section-icon" size={20} />
            Technology Stack
          </h2>
          <div className="tech-stack">
            <div className="tech-row">
              <span className="tech-label">Frontend</span>
              <span className="tech-value">React, Recharts</span>
            </div>
            <div className="tech-row">
              <span className="tech-label">Backend</span>
              <span className="tech-value">Flask, Python</span>
            </div>
            <div className="tech-row">
              <span className="tech-label">ML Model</span>
              <span className="tech-value">LSTM, scikit-learn</span>
            </div>
            <div className="tech-row">
              <span className="tech-label">Hardware</span>
              <span className="tech-value">ESP32, Sensors</span>
            </div>
          </div>
        </div>

        <div className="info-section">
          <h2>
            <Info className="section-icon" size={20} />
            Development Team
          </h2>
          <div className="team-card">
            <HardDrive className="team-icon" size={24} />
            <div className="team-info">
              <h3>SmartTransformer Team</h3>
              <p>Version 1.0.0 | 2026</p>
            </div>
          </div>
          <div className="contact-card">
            For more information, visit our documentation or contact support.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SystemInfo;