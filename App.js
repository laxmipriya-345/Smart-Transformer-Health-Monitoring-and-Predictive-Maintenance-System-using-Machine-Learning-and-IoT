import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Monitoring from './pages/Monitoring';
import Prediction from './pages/Prediction';
import Alerts from './pages/Alerts';
import SystemInfo from './pages/SystemInfo';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-container">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/monitoring" element={<Monitoring />} />
              <Route path="/prediction" element={<Prediction />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/system-info" element={<SystemInfo />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;