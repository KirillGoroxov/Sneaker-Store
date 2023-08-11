import { configureStore } from '@reduxjs/toolkit'
import products from './products'
import basket from './basket'
const store = configureStore({
  reducer: {
    products: products,
    basket: basket,
  },
})
export default store
export type RootState = ReturnType<typeof store.getState>
