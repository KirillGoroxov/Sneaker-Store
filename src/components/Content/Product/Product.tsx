import c from './Product.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import { RootState } from '../../../store';
import addItem from '../../../lib/addSneaker';

interface IProduct {
  image: string;
  title: string;
  price: string;
  id: number;
}

const Product: FC<IProduct> = ({ image, title, price, id }) => {
  const sneakers = useSelector((state: RootState) => state.sneakers);
  const basket = useSelector((state: RootState) => state.basket.basket);
  const dispatch = useDispatch();
  return (
    <figure className={c.product}>
      <Link to={`/sneaker/${id}`}>
        <img src={image + '1.jpg'} alt="sneaker-1" className={c.opacity} />
        <img src={image + '2.jpg'} alt="sneaker-2" className={c.opacity_2} />
        <figcaption>{title}</figcaption>
        <figcaption className="mb-2">{price}Р</figcaption>
      </Link>
      <button
        id={`sneaker-${id}`}
        onClick={(e) => addItem(e, sneakers, basket, dispatch)}
      >
        В корзину
      </button>
    </figure>
  );
};
export default Product;
