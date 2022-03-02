import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/Profile';
import Users from './components/users/Users';
import Reports from './components/Reports';
import Sales from './components/Sales';
import Monitor from './components/Monitor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index path="users" element={<Users />} />
          <Route path="sales" element={<Sales />} />
          <Route path="reports" element={<Monitor />} />
          <Route path="monitor" element={<Reports />} />
        </Route>
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
