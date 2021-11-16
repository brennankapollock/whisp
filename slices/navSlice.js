import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "nav",
  initialState: {
    origin: null,
    destination: null,
    travelTimeInformation: null,
    cost: null,
  },
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
    setCost: (state, action) => {
      state.cost = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation, setCost } =
  navSlice.actions;

//Selectors
export const selectOrigin = (state) => state.nav.origin;
export const seletedDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;
export const selectCost = (state) => state.nav.cost;

export default navSlice.reducer;
