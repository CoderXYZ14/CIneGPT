import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import moviesReducer from "./movieSlice";

export const appStore = configureStore({
  reducer: {
    user: authReducer,
    movies: moviesReducer,
  },
});
