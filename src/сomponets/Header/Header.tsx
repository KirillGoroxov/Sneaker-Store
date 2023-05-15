import React, { useState } from 'react'
import Basket from './Basket/Basket'
import Navbar from './Navbar/Navbar'
const Header: React.FC = () => {
  const [basket, setBasket] = useState<boolean>(false)
  const changeBasket = () => {
    setBasket(!basket)
  }
  return (
    <header>
      <Navbar changeBasket={changeBasket} />
      <Basket
        basket={basket}
        setBasket={setBasket} />
    </header>
  )
}
export default Header