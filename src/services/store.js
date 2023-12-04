import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Events/EventSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
