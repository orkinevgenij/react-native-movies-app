import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../movieSlice";
import serialsSlice from "../serialsSlice";
import topFilmsSlice from "../topFilmsSlice";

const store = configureStore({
  reducer: {
    movies: movieSlice,
    topFilms: topFilmsSlice,
    serials: serialsSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
