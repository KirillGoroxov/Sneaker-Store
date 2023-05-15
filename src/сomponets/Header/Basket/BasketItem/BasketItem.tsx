import c from './BasketItem.module.scss'
import { useDispatch } from 'react-redux'
import { addItem, deleteItem, deleteSneaker } from '../../../../store/basket'

type PropsType = {
  key: string
  count: number
  id: string
  image: string
  title: string
  price: string
}
const BasketItem: React.FC<PropsType> = (props) => {
  const dispatch = useDispatch()
  const add = (e: React.MouseEvent<HTMLButtonElement>) => dispatch(addItem((e.target as HTMLButtonElement).id))
  const remove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.count === 1) {
      dispatch(deleteSneaker((e.target as HTMLButtonElement).id))
    }
    else dispatch(deleteItem((e.target as HTMLButtonElement).id))
  }
  const removeSneaker = (e: React.MouseEvent<HTMLImageElement>) => {
    dispatch(deleteSneaker((e.target as HTMLButtonElement).id))
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
      <div>{Number(props.price) * props.count} P</div>
      <img className={c.delete} id={props.id} onClick={removeSneaker} src="./../../../../../images/delete.svg" alt="" />
    </div>
  )
}
export default BasketItem