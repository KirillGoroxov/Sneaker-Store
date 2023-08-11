import React, { useState } from 'react'
import Basket from './Basket/Basket'
import Navbar from './Navbar/Navbar'
import c from './Header.module.scss'
const Header: React.FC = () => {
  const [basket, setBasket] = useState<boolean>(false)
  const changeBasket = () => {
    setBasket(!basket)
  }
  document.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      ;(
        document.getElementById('header') as HTMLHeadElement
      ).style.backgroundColor = '#d6d6d6'
    }
    if (window.scrollY < 30) {
      ;(
        document.getElementById('header') as HTMLHeadElement
      ).style.backgroundColor = ''
    }
  })
  return (
    <header className={c.wrapper} id="header">
      <Navbar changeBasket={changeBasket} />
      <Basket basket={basket} setBasket={setBasket} />
    </header>
  )
}
export default Header
