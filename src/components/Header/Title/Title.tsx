import { MouseEventHandler } from 'react';
import c from './Title.module.scss';
import { Link, useLocation } from 'react-router-dom';

const Title = ({ changeBasket }: { changeBasket: MouseEventHandler }) => {
  const location = useLocation();
  return (
    <div className={c.navbar}>
      <Link to="/">
        <h1>sneakers store</h1>
        <img src="/logo.svg" alt="LOGO" />
      </Link>
      {location.pathname !== '/shop/delivery' && (
        <img
          onClick={changeBasket}
          id="basket"
          src="/icons/basket.svg"
          alt="basket"
          className={c.basket}
        />
      )}
    </div>
  );
};

export default Title;
