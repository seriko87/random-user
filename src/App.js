import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/profile/Profile';
import Users from './components/users/Users';
import Reports from './components/Reports';
import Sales from './components/Sales';
import Monitor from './components/Monitor';
import DashboardWelcome from './components/dashboardWelcome/DashboardWelcome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardWelcome />} />
          <Route path="users" element={<Users />} />
          <Route path="sales" element={<Sales />} />
          <Route path="monitor" element={<Monitor />} />
          <Route path="reports" element={<Reports />} />
        </Route>
        <Route path="profile/:userId" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
