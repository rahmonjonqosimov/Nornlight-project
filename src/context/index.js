import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import authSlilce from "./slices/authSlilce";
import wishlistSlice from "./slices/wishlistSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice,
    cart: cartSlice,
    auth: authSlilce,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
