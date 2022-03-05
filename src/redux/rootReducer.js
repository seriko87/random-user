import dashboardSlice from './features/dashboardSlice';
import usersSlice from './features/usersSlice';

const rootReducer = {
  activeTab: dashboardSlice,
  userdata: usersSlice,
};

export default rootReducer;
