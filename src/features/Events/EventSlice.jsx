import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // PAYLOAD IN THIS CASE IS A NEWITEM THAT IS CREATED ON SUBMIT
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload =
      state.cart = state.cart.filter((item) => item.itemId !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
    inreaseItemQuantity(state, action) {
      // payload === pizzaId
      const item = state.cart.find((item) => item.itemId === action.payload);
      item.quantity++;
    },
  },
});

export const getCart = (state) => {
  console.log(state.cart);
  return state.cart.cart;
};

export const getTotalCartQuantity = (state) => state.cart.cart.length;

export const getCurrentEventQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.itemId === id)?.quantity ?? 0;

export const { addItem, deleteItem, inreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
