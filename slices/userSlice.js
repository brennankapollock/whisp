import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: null,
    email: null,
    password: null,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setName, setEmail, setPassword } = userSlice.actions;

//Selectors
export const selectName = (state) => state.user.name;
export const selectEmail = (state) => state.user.email;
export const selectPassword = (state) => state.user.password;

export default userSlice.reducer;
