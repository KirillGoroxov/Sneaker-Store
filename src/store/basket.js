import { createSlice } from "@reduxjs/toolkit"
const basket = createSlice({
  name: 'basket',
  initialState: { basket: [] },
  reducers: {
    // Добавление первого товара
    addProduct(state, action) {
      let newItem = { ...action.payload.newItem, count: 1 }
      const id = newItem.id
      // Проверяем есть объект в массиве basket
      if (action.payload.basket.find(i => i.id === id) === undefined) {
        state.basket = [newItem, ...state.basket]
      }
      else {
        const item = state.basket.find(i => i.id === id)
        const findItem = state.basket.findIndex(f => f.id === id)
        const newItem = { ...item, count: state.basket[findItem].count + 1 }
        state.basket[findItem] = newItem
      }
    },
    addItem(state, action) {
      const id = action.payload
      const item = state.basket.find(i => i.id === id)
      const findItem = state.basket.findIndex(f => f.id === id)
      state.basket[findItem] = { ...item, count: state.basket[findItem].count + 1 }
    },
    deleteItem(state, action) {
      const id = action.payload
      const findItem = state.basket.findIndex(f => f.id === id)
      if (state.basket[findItem].count === 0) return
      const item = state.basket.find(i => i.id === id)
      state.basket[findItem] = { ...item, count: state.basket[findItem].count - 1 }
    },
    deleteSneaker(state, action) {
      state.basket = state.basket.filter(s => s.id !== action.payload)
    }
  }
})
export const { addProduct, addItem, deleteItem, deleteSneaker } = basket.actions
export default basket.reducer