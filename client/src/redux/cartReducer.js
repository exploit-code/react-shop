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
        item.totalPriceItem = (item.quantity * item.price).toFixed(2) // стоимость одного вида товара
      } else {
        state.products.push(action.payload);
        state.totalPriceItem = action.payload.price // стоимость одного вида товара
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
      item.quantity = item.quantity + 1;
      item.totalPriceItem = (Number(item.totalPriceItem) + Number(item.price)).toFixed(2)
    },
    deleteItem: (state, action) => { // Удаление одной штуки товара
      const item = state.products.find((item) => item.id === action.payload.id);
      if(item.quantity > 1) {
        item.quantity = item.quantity - 1
        item.totalPriceItem = (Number(item.totalPriceItem) - Number(item.price)).toFixed(2)
      } else {
        state.products = state.products.filter(item => item.id !== action.payload.id)
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItems, resetCart, addItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
