import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  rockets: [],
  isLoading: true,
  error: null,
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
  extraReducers(builder) {
    builder
      .addCase(getRocketsAsync.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getRocketsAsync.fulfilled, (state, action) => ({
        ...state,
        rockets: action.payload,
        isLoading: false,
      }))
      .addCase(getRocketsAsync.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
  },
});

export default rocketSlice.reducer;
