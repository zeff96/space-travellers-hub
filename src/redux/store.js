import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocketSlice';
import missionReducer from './missions/missionSlice';

export default configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
  },
});
