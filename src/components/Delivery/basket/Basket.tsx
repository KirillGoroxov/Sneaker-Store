import { nanoid } from 'nanoid';
import styles from './Basket.module.scss';
import { useSelector } from 'react-redux';
import Item from '../../Header/Basket/Item/Item';
import { RootState } from '../../../store';

const Basket = () => {
  const basketItems = useSelector((state: RootState) => state.basket.basket);
  const allPrice = basketItems
    .map((b) => Number(b.price) * b.count)
    .reduce((a, b) => a + b, 0);

  if (basketItems.length === 0) {
    window.location.replace('/');
  }
  return (
    <div className="flex justify-between flex-col">
      <div className={styles.basket}>
        {basketItems.map((b) => (
          <Item
            key={nanoid()}
            count={b.count}
            id={b.id}
            image={b.image}
            title={b.title}
            price={b.price}
          />
        ))}
      </div>
      <div className="text-[28px] ml-2 text-center lg:text-left">
        стоимость заказа: {allPrice} Р
      </div>
    </div>
  );
};
export default Basket;
