import c from './Product.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../../store/basket'
import { RootState } from '../../../store'

type PropsType = {
  key: string
  id: string
  image: string
  title: string
  price: string
}
const Product: React.FC<PropsType> = (props) => {
  const items = useSelector((state: RootState) => state.products.products)
  const basket = useSelector((state: RootState) => state.basket.basket)
  const dispatch = useDispatch()
  const addItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    const addBasket = document.getElementById('basket') as HTMLImageElement
    addBasket.style.transform = 'scale(1.3)'
    setTimeout(() => {
      addBasket.style.transform = ''
    }, 300)
    const id = (e.target as HTMLButtonElement).id
    const newItem = items.find((i) => i.id === id)
    dispatch(addProduct({ newItem, basket }))
  }
  return (
    <figure className={c.product}>
      <img src={props.image + '1.jpg'} alt="" className={c.opacity} />
      <img
        src={props.image + '2.jpg'}
        alt=""
        id={props.id}
        className={c.opacity_2}
      />
      <figcaption className={c.title}>{props.title}</figcaption>
      <figcaption className={c.price}>{props.price}Р</figcaption>
      <button id={props.id} onClick={addItem}>
        В корзину
      </button>
    </figure>
  )
}
export default Product
