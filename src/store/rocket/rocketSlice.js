import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  rockets: [],
};

const baseURl = "https://api.spacexdata.com/v4/rockets";

export const getRocketsAsync = createAsyncThunk(
  "rockets/getRocketsAsyn",
  async () => {
    try {
      const respone = await axios.get(baseURl);
      return respone.data;
    } catch (e) {
      return e.message;
    }
  }
);

export const rocketSlice = createSlice({
  name: "rockets",
  initialState,
  extraReducers: {},
});

export default rocketSlice.reducer;
