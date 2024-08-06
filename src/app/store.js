import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";

export const appStore = configureStore({
  reducer: {
    user: authReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});
