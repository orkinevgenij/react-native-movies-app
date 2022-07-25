import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TOP_MOVIES } from "../../api/api";

export interface Movies {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

interface MoviesState {
  moviesList: Movies[];
  favoritesMovie: Movies[];
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  moviesList: [],
  favoritesMovie: [],
  loading: false,
  error: null,
};

export const fetchTopMovies = createAsyncThunk<
  Movies[],
  undefined,
  { rejectValue: string }
>("topMovies/fetchTopMovies", async (_, { rejectWithValue }) => {
  const response = await fetch(TOP_MOVIES);
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }
  const data = await response.json();
  return data.results;
});

const topMoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addFavoriteFilm: (state, action: PayloadAction<string>) => {
    //   const filteredMovies = state.moviesList.filter((movie) => {
    //     return movie.id === action.payload;
    //   });
    //   state.favoritesMovie.push(...filteredMovies);
    //   state.favoritesMovie = [
    //     ...new Map(
    //       state.favoritesMovie.map((movie) => [movie["title"], movie])
    //     ).values(),
    //   ];
    // },
    // delFavoritesFilm: (state, action: PayloadAction<string>) => {
    //   state.favoritesMovie = state.favoritesMovie.filter(
    //     (favorites) => favorites.id !== action.payload
    //   );
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopMovies.fulfilled, (state, action) => {
        state.moviesList = action.payload;
        state.loading = false;
      });
  },
});

// export const { addFavoriteFilm, delFavoritesFilm } = topMoviesSlice.actions;
export default topMoviesSlice.reducer;
