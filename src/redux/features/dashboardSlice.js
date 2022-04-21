import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
  name: 'activeTab',
  initialState: {
    value: '',
  },
  reducers: {
    setActiveTab: (state, action) => {
      state.value = action.payload;
      
    },
  },
});

export const { setActiveTab } = dashboardSlice.actions;

export const selectTab = (state) => state.activeTab.value;

export default dashboardSlice.reducer;
