import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products:[]
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    changeQuantity: (state, action) => {
        state.products[action.payload.index].quantity = action.payload.quantity;
    },
    removeProduct: (state, action) => {
        state.products.splice(action.payload.index, 1);
    }
  }
})

// Action creators are generated for each case reducer function
export const { addProduct, changeQuantity, removeProduct } = cartSlice.actions

export default cartSlice.reducer