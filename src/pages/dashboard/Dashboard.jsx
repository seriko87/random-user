import './dash.css';
import List from '../../components/list/List';
import { menuItems } from './menuItems';
import { Outlet, useNavigate } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import { useSelector, useDispatch } from 'react-redux';
import { selectTab, setActiveTab } from '../../redux/features/dashboardSlice';

const Dashboard = () => {
  const activeTab = useSelector(selectTab);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <nav className="side-nav">
        <button
          className="logo"
          style={{
            fontSize: '36px',
            cursor: 'pointer',
            border: 'none',
            background: 'transparent',
          }}
          onClick={() => {
            dispatch(setActiveTab(''));
            navigate('/dashboard', { replace: true });
          }}
        >
          Dashboard
        </button>
        <div className="list-wrap">
          {menuItems.map((item) => {
            return <List {...item} />;
          })}
        </div>
      </nav>
      <div className="dash-content">
        <div className="nav-container">
          <Nav link={{ location: '/', name: 'home' }} header={activeTab} />
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
