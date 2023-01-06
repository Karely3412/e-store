import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartData'


export default configureStore({
    reducer: {
        cart: cartSlice
    }
})