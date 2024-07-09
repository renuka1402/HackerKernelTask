import { configureStore } from "@reduxjs/toolkit";
import productTaskReducer from "./productTaskSlice";

const store = configureStore({
  reducer: {
    productTask: productTaskReducer,
  },
});


export default store;
