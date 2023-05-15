import c from './Image.module.scss'
const Image: React.FC = () => {
  return (
    <div className={c.image}>
      <div className={c.text}>
        <span>Кроссовки ADIDAS NITEBALL</span>
        <div className={c.weight}>original</div>
      </div>
      <img src="./../../../../images/head.jpg" alt="" />
    </div>
  )
}
export default Image