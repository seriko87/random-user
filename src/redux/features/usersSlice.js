import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'userdata',
  initialState: {
    value: '',
    currentUser: [],
  },
  reducers: {
    setData: (state, action) => {
      state.value = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setData, setCurrentUser } = userSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getData = (options) => async (dispatch) => {
  try {
    const res = await axios(options);
    const newData = res.data.results.map((item, index) => {
      return {
        id: index + 1,
        name: item.name.first + ' ' + item.name.last,
        username: item.login.username,
        email: item.email,
        dob: item.dob.date,
        age: item.dob.age,
        gender: item.gender,
        location: item.location,
        img: item.picture.large,
        thumbnail: item.picture.thumbnail,
        phone: item.phone,
        mobile: item.cell,
      };
    });

    dispatch(setData(newData));
  } catch (error) {
    console.log(error);
  }
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const userdata = (state) => state.userdata;

export default userSlice.reducer;
