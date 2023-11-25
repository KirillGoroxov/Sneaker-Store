import c from './BasketItem.module.scss'
import { useDispatch } from 'react-redux'
import { addItem, deleteItem, deleteSneaker } from '../../../../store/basket'

type PropsType = {
  count: number
  id: string
  image: string
  title: string
  price: string
}
const BasketItem: React.FC<PropsType> = ({
  count,
  id,
  image,
  title,
  price,
}) => {
  const dispatch = useDispatch()
  const add = (e: React.MouseEvent<HTMLButtonElement>) =>
    dispatch(addItem((e.target as HTMLButtonElement).id))
  const remove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (count === 1) {
      dispatch(deleteSneaker((e.target as HTMLButtonElement).id))
    } else dispatch(deleteItem((e.target as HTMLButtonElement).id))
  }
  const removeSneaker = (e: React.MouseEvent<HTMLImageElement>) => {
    dispatch(deleteSneaker((e.target as HTMLButtonElement).id))
  }
  return (
    <div className={c.basketItem}>
      <img src={image + '1.jpg'} className={c.sneaker} alt={title} />
      <div className={c.title}>{title}</div>
      <div className={c.counter}>
        <button onClick={remove} id={id}>
          -
        </button>
        {count}
        <button onClick={add} id={id}>
          +
        </button>
      </div>
      <div>{Number(price) * count} P</div>
      <img
        className={c.delete}
        id={id}
        onClick={removeSneaker}
        src="./../../../../../images/delete.svg"
        alt="delete"
      />
    </div>
  )
}
export default BasketItem
