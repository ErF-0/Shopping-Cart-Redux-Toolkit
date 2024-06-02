import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../features/product/productSlice";
import cartReducer from "../features/cart/cartSlice";
import localStorageReducer from "../features/localStorage/localStorageSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    localStorage: localStorageReducer,
  },
});

export default store;
