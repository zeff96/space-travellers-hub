import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rockets: [],
};

export const rocketSlice = createSlice({
  name: "rockets",
  initialState,
  extraReducers: {},
});

export default rocketSlice.reducer;
