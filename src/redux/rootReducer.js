import dashboardSlice from './features/dashboardSlice';
import usersSlice from './features/usersSlice';
import darkModeSlice from './features/darkModeSlice';

const rootReducer = {
  activeTab: dashboardSlice,
  userdata: usersSlice,
  darkMode: darkModeSlice,
};

export default rootReducer;
