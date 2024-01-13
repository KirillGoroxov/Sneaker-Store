import { useState } from 'react';
import Basket from './Basket/Basket';
import styles from './Header.module.scss';
import Title from './Title/Title';

const Header = () => {
  const [basket, setBasket] = useState<boolean>(false);
  const changeBasket = () => {
    const header = document.getElementById('header') as HTMLHeadElement;
    !basket
      ? (header.style.borderRadius = '0 0 0 10px')
      : (header.style.borderRadius = '0 0 10px 10px');
    setBasket(!basket);
  };
  if (basket === true) {
    document.body.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setBasket(false);
    });
  }
  return (
    <header className={styles.header} id="header">
      <Title changeBasket={changeBasket} />
      {basket && <Basket setBasket={setBasket} />}
    </header>
  );
};
export default Header;
