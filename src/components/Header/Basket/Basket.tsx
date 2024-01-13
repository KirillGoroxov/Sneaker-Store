import c from './Basket.module.scss';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import { RootState } from '../../../store';
import Item from './Item/Item';
import { Dispatch, SetStateAction } from 'react';
const Basket = ({
  setBasket,
}: {
  setBasket: Dispatch<SetStateAction<boolean>>;
}) => {
  const basketItems = useSelector((state: RootState) => state.basket.basket);
  const allPrice = basketItems
    .map((b) => Number(b.price) * b.count)
    .reduce((a, b) => a + b, 0);

  const link = basketItems.length !== 0 ? '/delivery' : '';
  return (
    <div className={c.basket_container}>
      <div className={c.basket}>
        {/*Если корзина пуста  */}
        {basketItems.length === 0 ? (
          <div className={c.basketNone}>Корзина пока пуста</div>
        ) : (
          basketItems.map((b) => (
            <Item
              key={nanoid()}
              count={b.count}
              id={b.id}
              image={b.image}
              title={b.title}
              price={b.price}
            />
          ))
        )}
      </div>
      <div className={c.fixed}>
        <div className={c.price}>{allPrice}P</div>
        <Link to={link}>
          <button className={c.order} onClick={() => setBasket(false)}>
            Оформить заказ
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Basket;
