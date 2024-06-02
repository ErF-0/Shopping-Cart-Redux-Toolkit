import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cartData")) || {};

const localStorageSlice = createSlice({
  name: "localStorage",
  initialState,
  reducers: {
    setLocalStorageData: (state, action) => {
      localStorage.setItem("cartData", JSON.stringify(action.payload));
      return action.payload;
    },
  },
});

export const { setLocalStorageData } = localStorageSlice.actions;

export default localStorageSlice.reducer;
