import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  missions: [],
  isLoading: true,
  error: null,
};

const baseURl = "https://api.spacexdata.com/v3/missions";

export const fetchMissions = createAsyncThunk(
  "missions/fetchmissions", async () => {
    try {
      const response = await axios.get(baseURl);
      return response.data;
    } catch (e) {
      return e.message;
    }
  }
);

export const missionSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    missionStatus(state, action) {
      return [...state.map((mission) => (
        mission.id === action.payload ? { ...mission, joined: !mission.joined } : mission))
      ]
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMissions.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchMissions.fulfilled, (state, action) => {
        const missionData = action.payload.map((mission) => ({
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
          joined: false,
        }));
        console.log(missionData);
        return {
          isLoading: false,
          ...state,
          missions: missionData,
        };
      })
      .addCase(fetchMissions.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
  },
});
export const { missionStatus } = missionSlice.actions;
export default missionSlice.reducer;
