import React from 'react'
import c from './Basket.module.scss'
import BasketItem from './BasketItem/BasketItem'
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'
import { RootState } from '../../../store'

type PropsType = {
  basket: boolean
  setBasket: (basket: boolean) => void
}
const Basket: React.FC<PropsType> = ({ basket, setBasket }) => {
  const basketItems = useSelector((state: RootState) => state.basket.basket)
  const allPrice = basketItems
    .map((b) => Number(b.price) * b.count)
    .reduce((a, b) => a + b, 0)
  if (basket === true) {
    document.body.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setBasket(false)
    })
    document.body.addEventListener('mouseup', (e) => {
      const basket = document.getElementById(
        'basketContainer',
      ) as HTMLDivElement
      const delivery = document.getElementById('delivery') as HTMLButtonElement
      if (e.target === delivery && basketItems.length !== 0) {
        setTimeout(() => setBasket(false), 0)
      }
      if (!basket.contains(e.target as Node)) {
        setBasket(false)
      }
    })
  }
  return (
    <div id="basketContainer">
      {' '}
      {basket && (
        <div className={c.basket}>
          {/*Если корзина пуста  */}
          {basketItems.length === 0 ? (
            <div className={c.basketNone}>Корзина пока пуста</div>
          ) : (
            basketItems.map((b) => (
              <BasketItem
                key={nanoid()}
                count={b.count}
                id={b.id}
                image={b.image}
                title={b.title}
                price={b.price}
              />
            ))
          )}
          <div className={c.price}>{allPrice}P</div>
          <Link to={basketItems.length === 0 ? '/' : '/delivery'}>
            <button className={c.order} id="delivery">
              Оформить заказ
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}
export default Basket
