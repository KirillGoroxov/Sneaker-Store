import React, { useState } from 'react'
import c from './Header.module.scss'
import Basket from './Basket/Basket'
import Navbar from './Navbar/Navbar'
const Header = () => {
  const [basket, setBasket] = useState(false)
  const changeBasket = () => setBasket(!basket)
  return (
    <header className={c.wrapper}>
      <Navbar changeBasket={changeBasket} />
      <Basket
        basket={basket}
        setBasket={setBasket} />
    </header>
  )
}
export default Header