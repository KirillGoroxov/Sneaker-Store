import c from './Product.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../../store/basket'
import { RootState } from '../../../store'

type PropsType = {
  id: string
  image: string
  title: string
  price: string
}
const Product: React.FC<PropsType> = ({ id, image, title, price }) => {
  const state = useSelector((state: RootState) => state)
  const items = state.products.products
  const basket = state.basket.basket
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
      <img src={image + '1.jpg'} alt={title} className={c.opacity} />
      <img src={image + '2.jpg'} alt={title} id={id} className={c.opacity_2} />
      <figcaption className={c.title}>{title}</figcaption>
      <figcaption className={c.price}>{price}Р</figcaption>
      <button id={id} onClick={addItem}>
        В корзину
      </button>
    </figure>
  )
}
export default Product
