import React, { useState } from 'react'
import BasketItem from '../Header/Basket/BasketItem/BasketItem'
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import c from './Delivery.module.scss'
import { RootState } from '../../store'
const Delivery: React.FC = () => {
  const basketItems = useSelector((state: RootState) => state.basket.basket)
  const allPrice = basketItems
    .map((b) => Number(b.price) * b.count)
    .reduce((a, b) => a + b, 0)
  const [city, setCity] = useState<string>('')
  const [street, setStreet] = useState<string>('')
  const [house, setHouse] = useState<string>('')
  const [index, setIndex] = useState<string>('')
  if (basketItems.length === 0) {
    window.history.go(-1)
  }
  return (
    <div className={c.wrapper}>
      <div className={c.basket}>
        {basketItems.map((b) => (
          <BasketItem
            key={nanoid()}
            count={b.count}
            id={b.id}
            image={b.image}
            title={b.title}
            price={b.price}
          />
        ))}
      </div>
      <div className={c.allPrice}>{allPrice} Р</div>
      <div className={c.formContainer}>
        <div className={c.deliveryText}>Доставка</div>
        <form action="" className={c.form}>
          <div>Город</div>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <div>Улица</div>
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <div>Дом</div>
          <input
            type="text"
            value={house}
            onChange={(e) => setHouse(e.target.value)}
          />
          <div>Индекс</div>
          <input
            type="text"
            value={index}
            onChange={(e) => setIndex(e.target.value)}
          />
          <input className={c.button} value="Оформить" type="submit" />
        </form>
      </div>
    </div>
  )
}
export default Delivery
