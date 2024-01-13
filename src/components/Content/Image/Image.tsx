import c from './Image.module.scss';
const Image = () => {
  return (
    <div className={c.image}>
      <div className={c.text}>
        <b>adidas</b>
        <p>niteball</p>
      </div>
      <img src="/head.jpg" alt="adidas niteball" />
    </div>
  );
};
export default Image;
