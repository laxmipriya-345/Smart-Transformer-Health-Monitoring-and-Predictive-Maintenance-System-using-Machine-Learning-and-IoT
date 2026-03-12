import { useState } from 'react';
import { Brain, AlertTriangle, CheckCircle, Gauge } from 'lucide-react';

function Prediction() {
  const [formData, setFormData] = useState({
    air_temp: '',
    process_temp: '',
    rpm: '',
    torque: '',
    tool_wear: ''
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const randomProb = Math.random();
      setResult({
        failure_probability: randomProb,
        health_score: (1 - randomProb) * 100,
        status: randomProb > 0.7 ? 'HIGH RISK' : randomProb > 0.3 ? 'MODERATE' : 'LOW RISK',
        next_maintenance: randomProb > 0.7 ? 'Immediate' : randomProb > 0.3 ? '3 days' : '7 days',
        recommendations: [
          'Check cooling system',
          'Inspect bearings',
          'Monitor temperature trends'
        ]
      });
      setLoading(false);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getStatusClass = (status) => {
    switch(status) {
      case 'HIGH RISK': return 'high-risk';
      case 'MODERATE': return 'moderate';
      default: return 'low-risk';
    }
  };

  return (
    <div>
      <div className="dashboard-header">
        <div className="dashboard-title">
          <h1>Failure Prediction</h1>
          <p>ML-based predictive maintenance</p>
        </div>
      </div>

      <div className="prediction-grid">
        <div className="prediction-form">
          <h2 className="form-title">Enter Parameters</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Air Temperature (K)</label>
              <input
                type="number"
                name="air_temp"
                value={formData.air_temp}
                onChange={handleChange}
                placeholder="e.g., 300.5"
                step="0.1"
                required
              />
            </div>

            <div className="form-group">
              <label>Process Temperature (K)</label>
              <input
                type="number"
                name="process_temp"
                value={formData.process_temp}
                onChange={handleChange}
                placeholder="e.g., 310.2"
                step="0.1"
                required
              />
            </div>

            <div className="form-group">
              <label>Rotational Speed (rpm)</label>
              <input
                type="number"
                name="rpm"
                value={formData.rpm}
                onChange={handleChange}
                placeholder="e.g., 1500"
                step="1"
                required
              />
            </div>

            <div className="form-group">
              <label>Torque (Nm)</label>
              <input
                type="number"
                name="torque"
                value={formData.torque}
                onChange={handleChange}
                placeholder="e.g., 40.5"
                step="0.1"
                required
              />
            </div>

            <div className="form-group">
              <label>Tool Wear (min)</label>
              <input
                type="number"
                name="tool_wear"
                value={formData.tool_wear}
                onChange={handleChange}
                placeholder="e.g., 10"
                step="1"
                required
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Analyzing...
                </>
              ) : 'Predict Failure Probability'}
            </button>
          </form>
        </div>

        {result && (
          <div className="results-card">
            <h2 className="result-header">Prediction Results</h2>
            
            <div className="result-main">
              <div className="result-percentage">
                {(result.failure_probability * 100).toFixed(1)}%
              </div>
              <div className={`result-status ${getStatusClass(result.status)}`}>
                {result.status}
              </div>
            </div>

            <div className="result-details">
              <div className="result-row">
                <span className="result-row-label">Health Score</span>
                <span className="result-row-value">{result.health_score.toFixed(1)}/100</span>
              </div>
              <div className="result-row">
                <span className="result-row-label">Next Maintenance</span>
                <span className="result-row-value">{result.next_maintenance}</span>
              </div>
            </div>

            {result.failure_probability > 0.3 && (
              <div className="recommendations-box">
                <div className="recommendations-title">
                  <Gauge size={16} />
                  <span>Recommendations</span>
                </div>
                <ul className="recommendations-list">
                  {result.recommendations.map((rec, index) => (
                    <li key={index}>
                      <span className="recommendation-dot"></span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {result.failure_probability > 0.7 && (
              <div className="alert-box critical">
                <AlertTriangle className="alert-icon critical" size={20} />
                <span className="alert-text">Immediate maintenance required!</span>
              </div>
            )}

            {result.failure_probability < 0.3 && (
              <div className="alert-box success">
                <CheckCircle className="alert-icon success" size={20} />
                <span className="alert-text">System operating normally</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Prediction;