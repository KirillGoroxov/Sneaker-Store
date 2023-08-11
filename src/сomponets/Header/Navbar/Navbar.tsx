import c from './Navbar.module.scss'
import { Link, useLocation } from 'react-router-dom'
type PropsType = {
  changeBasket: () => void
}
const Navbar: React.FC<PropsType> = (props) => {
  const location = useLocation()
  return (
    <div className={c.navContainer}>
      <Link to="/">
        <h1>Sneakers staff</h1>
      </Link>
      <div className={c.navbar}>
        {location.pathname !== '/delivery' && (
          <img
            className={c.basketImage}
            onClick={props.changeBasket}
            id="basket"
            src="./../../../../images/basket.svg"
            alt=""
          />
        )}
      </div>
    </div>
  )
}
export default Navbar
