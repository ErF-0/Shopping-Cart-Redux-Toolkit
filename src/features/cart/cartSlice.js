import { createSlice } from "@reduxjs/toolkit";
import { sumQuantity, sumTotalPrice } from "../../helpers/helper";

const initialValue = {
  selectedItems: [],
  itemsCounter: 0,
  totalPrice: 0,
  checkout: false,
};
const localStorageData = JSON.parse(localStorage.getItem("cartData")) || {};
const initialState = localStorageData
  ? { ...initialValue, ...localStorageData }
  : initialValue;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.itemsCounter = sumQuantity(state.selectedItems);
        state.totalPrice = sumTotalPrice(state.selectedItems);
        state.checkout = false;
      }
    },
    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = [...newSelectedItems];
      state.itemsCounter = sumQuantity(newSelectedItems);
      state.totalPrice = sumTotalPrice(newSelectedItems);
    },
    increaseItem: (state, action) => {
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[increaseIndex].quantity++;
      state.itemsCounter = sumQuantity(state.selectedItems);
      state.totalPrice = sumTotalPrice(state.selectedItems);
    },
    decreaseItem: (state, action) => {
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[decreaseIndex].quantity--;
      state.itemsCounter = sumQuantity(state.selectedItems);
      state.totalPrice = sumTotalPrice(state.selectedItems);
    },
    checkout: (state) => {
      state.selectedItems = [];
      state.checkout = true;
      state.itemsCounter = 0;
      state.totalPrice = 0;
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem, increaseItem, decreaseItem, checkout } =
  cartSlice.actions;
