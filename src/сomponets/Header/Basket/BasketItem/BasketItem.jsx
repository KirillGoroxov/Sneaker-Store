import React, { useState } from 'react'
import c from './BasketItem.module.scss'
import { useDispatch } from 'react-redux'
import { addItem, deleteItem, deleteSneaker } from '../../../../store/basket'
const BasketItem = (props) => {
  const dispatch = useDispatch()
  const add = e => dispatch(addItem(e.target.id))
  const remove = e => {
    if (props.count === 1) {
      dispatch(deleteSneaker(e.target.id))
    }
    else dispatch(deleteItem(e.target.id))
  }
  const removeSneaker = e => {
    dispatch(deleteSneaker(e.target.id))
  }
  return (
    <div className={c.basketItem} >
      <img src={props.image + '1.jpg'} className={c.sneaker} alt="" />
      <div className={c.title}>
        {props.title}
      </div>
      <div className={c.counter}>
        <button onClick={remove} id={props.id}>-</button>
        {props.count}
        <button onClick={add} id={props.id}>+</button>
      </div>
      <div>{props.price * props.count} P</div>
      <img className={c.delete} id={props.id} onClick={removeSneaker} src="./../../../../../images/delete.svg" alt="" />
    </div>
  )
}
export default BasketItem