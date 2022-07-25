import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { URL_SERIALS } from "../../api/api";
export interface Serials {
  id: string;
  name: string;
  overview: string;
  poster_path: string;
}

interface SerialState {
  serialsList: Serials[];
  favoriteSerials: Serials[];
  loading: boolean;
  error: string | null;
}

const initialState: SerialState = {
  serialsList: [],
  favoriteSerials: [],
  loading: false,
  error: null,
};

export const fetchSerials = createAsyncThunk<
  Serials[],
  undefined,
  { rejectValue: string }
>("serials/fetchSerials", async (_, { rejectWithValue }) => {
  const response = await fetch(URL_SERIALS);
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }
  const data = await response.json();
  return data.results;
});

const serialsSlice = createSlice({
  name: "serials",
  initialState,
  reducers: {
    addFavoritesSerial: (state, action: PayloadAction<string>) => {
      const filteredSerial = state.serialsList.filter((serial) => {
        return serial.id === action.payload;
      });
      state.favoriteSerials.push(...filteredSerial);
      state.favoriteSerials = [
        ...new Map(
          state.favoriteSerials.map((serial) => [serial["name"], serial])
        ).values(),
      ];
    },
    delFavoritesSerial: (state, action: PayloadAction<string>) => {
      state.favoriteSerials = state.favoriteSerials.filter(
        (favorites) => favorites.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSerials.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSerials.fulfilled, (state, action) => {
        state.serialsList = action.payload;
        state.loading = false;
      });
  },
});

export const { addFavoritesSerial, delFavoritesSerial } = serialsSlice.actions;
export default serialsSlice.reducer;
