import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeItem: (state,action) => {
      state.cartItems=state.cartItems.filter(item=>item.id !== action.payload)
    },
    resetCart: (state) => {
      state.cartItems = []
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart,removeItem,resetCart } = cartSlice.actions;

export default cartSlice.reducer;
