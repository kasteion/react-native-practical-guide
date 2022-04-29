import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      // state.ids = [...state.ids, action.payload];
      state.ids.push(action.payload);
    },
    removeFavorite: (state, action) => {
      // state.ids = state.ids.filter((id) => id !== action.payload);
      state.ids.splice(state.ids.indexOf(action.payload), 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
