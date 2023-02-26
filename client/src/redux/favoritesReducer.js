import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  products: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if(item) {
        state.products = state.products.filter(item => item.id !== action.payload.id)
      } else {
        state.products.push(action.payload);
      }
    },
    removeItemsFavorites: (state, action) => { // Удаление одного вида товара
      state.products = state.products.filter(item => item.id !== action.payload.id)
    },
    resetFavorites: (state) => {
      state.products = []
    },
    addItemFavorites: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      item.quantity = item.quantity + 1;
    },
    deleteItemFavorites: (state, action) => { // Удаление одной штуки товара
      const item = state.products.find((item) => item.id === action.payload.id);
      if(item.quantity > 1) {
        item.quantity = item.quantity - 1
      } else {
        state.products = state.products.filter(item => item.id !== action.payload.id)
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToFavorites, removeItemsFavorites, resetFavorites, addItemFavorites, deleteItemFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
