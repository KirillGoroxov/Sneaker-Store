import { configureStore } from '@reduxjs/toolkit'
import products from './products'
import basket from './basket'
export default configureStore({
  reducer: {
    products: products,
    basket: basket
  }
})