import React from 'react'
import c from './Product.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../../store/basket'
const Product = (props) => {
  const items = useSelector(state => state.products.products)
  const basket = useSelector(state => state.basket.basket)
  const dispatch = useDispatch()
  const addItem = (e) => {
    const addBasket = document.getElementById('basket')
    addBasket.style.transform = 'scale(1.3)'
    setTimeout(() => {
      addBasket.style.transform = ''
    }, 300)
    const id = e.target.id
    const newItem = items.find(i => i.id === id)
    dispatch(addProduct({ newItem, basket }))
  }
  return (
    <div className={c.product}>
      <img
        src={props.image + '1.jpg'} alt=""
        className={c.opacity} />
      <img
        src={props.image + '2.jpg'} alt=""
        id={props.id}
        className={c.opacity_2} />
      <div className={c.title}>{props.title}</div>
      <div className={c.price}>{props.price}Р</div>
      <button id={props.id} onClick={addItem}>В корзину</button>
    </div>
  )
}
export default Product
