import { RootState } from '../../../store';
import styles from './Text.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import addItem from '../../../lib/addSneaker';
import { ISneaker } from '../../../store/sneakers';

const Text = ({ sneaker }: { sneaker: ISneaker | undefined }) => {
  const basket = useSelector((state: RootState) => state.basket.basket);
  const sneakers = useSelector((state: RootState) => state.sneakers);
  const dispatch = useDispatch();

  return (
    <div className={styles.text}>
      <p>{sneaker?.description}</p>
      <div>
        <p>{sneaker?.price} Р</p>
        <button
          id={'add-' + sneaker?.id}
          onClick={(e) => addItem(e, sneakers, basket, dispatch)}
        >
          В корзину
        </button>
      </div>
    </div>
  );
};
export default Text;
