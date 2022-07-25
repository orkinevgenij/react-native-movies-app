import { combineReducers, configureStore } from "@reduxjs/toolkit";
import movieSlice from "../movieSlice";
import serialsSlice from "../serialsSlice";
import topFilmsSlice from "../topFilmsSlice";

// const rootReducer = combineReducers({
//   movies: movieSlice,
// });
// const store = configureStore({
//   reducer: rootReducer,
// });
// export type RootState = ReturnType<typeof rootReducer>;

// export type AppDispatch = typeof store.dispatch;
// export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>();
// export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
// export default store;
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
