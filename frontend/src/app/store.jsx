import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/Authslice.js"

export const store = configureStore({
  reducer: {
    auth : authReducer
  },
});
