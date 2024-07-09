import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const productTaskSlice = createSlice({
  name: "productTask",
  initialState: {
    products: [],

  },
  
  reducers: {
    addProduct: (state, action) => {
      const productName = action.payload.name;
      const existingProduct = state.products.find(product => product.name === productName);

      if (existingProduct) {
        toast.error(`${productName} already exists!`);
      } else {
        state.products.push(action.payload);
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
 
  },
});

export const { addProduct, deleteProduct, searchProduct } = productTaskSlice.actions;
export default productTaskSlice.reducer;
