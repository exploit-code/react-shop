import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  promoCode: [],
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
    setPromo: (state, action) => {
      const promo = state.promoCode.find((item) => item === action.payload);
      if(promo !== action.payload) {
        state.promoCode.push(action.payload)
      } else {
        // state.promoCode = state.promoCode.filter((item) => item !== action.payload)
      }
    },
    addPromo: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      const GOOD5 = 'GOOD5';
      const GOOD10 = 'GOOD10';
      const GOOD15 = 'GOOD15';
      const GOOD20 = 'GOOD20';
      const promo = state.promoCode.find((item) => item === action.payload.value);
      if(promo === GOOD5) {
        item.price = (Number(item.price) * 0.95).toFixed(2);
        item.totalPriceItem = (Number(item.totalPriceItem) * 0.95).toFixed(2);
      } else if(promo === GOOD10) {
        item.price = (Number(item.price) * 0.9).toFixed(2);
        item.totalPriceItem = (Number(item.totalPriceItem) * 0.9).toFixed(2);
      }else if(promo === GOOD15) {
        item.price = (Number(item.price) * 0.85).toFixed(2);
        item.totalPriceItem = (Number(item.totalPriceItem) * 0.85).toFixed(2);
      }else if(promo === GOOD20) {
        item.price = (Number(item.price) * 0.8).toFixed(2);
        item.totalPriceItem = (Number(item.totalPriceItem) * 0.8).toFixed(2);
      }
    },
    resetPromo: (state) => {
      state.promoCode = []
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeItems,
  resetCart,
  addItem,
  deleteItem,
  setPromo,
  addPromo,
  resetPromo
} = cartSlice.actions;

export default cartSlice.reducer;
