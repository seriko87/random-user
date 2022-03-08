import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    value: true,
  },
  reducers: {
    setDarkLight: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDarkLight } = darkModeSlice.actions;

export const darkLightMode = (state) => state.darkMode.value;

export default darkModeSlice.reducer;
