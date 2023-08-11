import { createSlice } from '@reduxjs/toolkit'
export type BasketTypeItem = {
  id: string
  image: string
  title: string
  price: string
  count: number
}
type BasketType = {
  basket: BasketTypeItem[]
}
const initialState: BasketType = { basket: [] }
const basket = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    // Добавление первого товара
    addProduct(state, action) {
      // Добавляем объекту корзину свойство count
      const newItem = { ...action.payload.newItem, count: 1 }
      const id = newItem.id
      // Если в корзине еще нет такого товара (используем массива, который передаем аргументом в action)
      if (
        action.payload.basket.find((i: BasketTypeItem) => i.id === id) ===
        undefined
      ) {
        state.basket = [newItem, ...state.basket]
      }
      // Если товар уже есть в корзине
      else {
        // Ищем какой именно товар есть в корзине по id
        const item = state.basket.find((i) => i.id === id)!
        // Узнаем индекс этого товара в массиве
        const findItem = state.basket.findIndex((f) => f.id === id)
        // Обновляем счетчик предмета в корзине, добавляя 1 и присваиваем определенному элементу в корзине полученный элемент
        state.basket[findItem] = {
          ...item,
          count: state.basket[findItem].count + 1,
        }
      }
    },
    addItem(state, action) {
      const id = action.payload
      const item = state.basket.find((i) => i.id === id)!
      const findItem = state.basket.findIndex((f) => f.id === id)
      state.basket[findItem] = {
        ...item,
        count: state.basket[findItem].count + 1,
      }
    },
    deleteItem(state, action) {
      const id = action.payload
      const findItem = state.basket.findIndex((f) => f.id === id)
      if (state.basket[findItem].count === 0) return
      const item = state.basket.find((i) => i.id === id)!
      state.basket[findItem] = {
        ...item,
        count: state.basket[findItem].count - 1,
      }
    },
    deleteSneaker(state, action) {
      state.basket = state.basket.filter((s) => s.id !== action.payload)
    },
  },
})
export const { addProduct, addItem, deleteItem, deleteSneaker } = basket.actions
export default basket.reducer
