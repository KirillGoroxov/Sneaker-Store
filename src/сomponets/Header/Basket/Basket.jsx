import React from 'react'
import c from './Basket.module.scss'
import BasketItem from './BasketItem/BasketItem'
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'
const Basket = (props) => {
  const basketItems = useSelector(state => state.basket.basket)
  const allPrice = basketItems.map(b => Number(b.price) * b.count).reduce((a, b) => a + b, 0)
  if (props.basket === true) {
    document.body.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') props.setBasket(false)
    })
    document.body.addEventListener('mouseup', e => {
      const basket = document.getElementById('basketContainer')
      const delivery = document.getElementById('delivery')
      if (e.target === delivery &&
        basketItems.length !== 0) {
        setTimeout(() => props.setBasket(false), 0)
      }
      if (!basket.contains(e.target)) {
        props.setBasket(false)
      }
    })
  }
  return (
    <div id='basketContainer'> {props.basket &&
      <div className={c.basket} >
        {/*Если корзина пуста  */}
        {basketItems.length === 0 ?
          <div className={c.basketNone}>Корзина пока пуста</div> :
          basketItems.map(b =>
            <BasketItem
              key={nanoid()}
              count={b.count}
              id={b.id}
              image={b.image}
              title={b.title}
              price={b.price} />)}
        <div className={c.price}>
          {allPrice}P
        </div>
        <Link to={basketItems.length === 0 ? '/' : '/delivery'}>
          <button className={c.order} id='delivery'>Оформить заказ</button>
        </Link>
      </div>}
    </div>
  )
}
export default Basket