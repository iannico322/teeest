import { createSlice } from '@reduxjs/toolkit'

export const userCredentials = createSlice({
  name: "user",
  initialState: {
    value: {
      name: "Johnny Y",
      email: "johnyjohnyyespapa@gmail.com",
      password: "@gwapoSiSirDario",
      username: "nico322",
    },
  },
  reducers: {
    logout: (state) => {
      state.value = [];
    },
    addCredentials: (state, action) => {
      state.value = (action.payload);
    },
  },
});

export const { logout, addCredentials } = userCredentials.actions

export const users = (state) => state.user.value

export default userCredentials.reducer
