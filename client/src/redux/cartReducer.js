import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if(item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItems: (state, action) => { // Удаление одного вида товара
      state.products = state.products.filter(item => item.id !== action.payload.id)
    },
    resetCart: (state) => {
      state.products = []
    },
    addItem: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      item.quantity = action.payload.quantity + 1;
    },
    deleteItem: (state, action) => { // Удаление одной штуки товара
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item.quantity > 1) {
        item.quantity = action.payload.quantity - 1
      } else {
        state.products = state.products.filter(item => item.id !== action.payload.id)
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItems, resetCart, addItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
