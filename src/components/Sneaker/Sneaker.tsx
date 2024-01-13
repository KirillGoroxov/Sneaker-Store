import styles from './Sneaker.module.scss';
import Photos from './Photos/Photos';
import Text from './Text/Text';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
const Sneaker = () => {
  const { id } = useParams();
  const sneakers = useSelector((state: RootState) => state.sneakers);
  const sneaker = sneakers.find((i) => i.id === Number(id));
  return (
    <div className={styles.sneaker}>
      <h3>{sneaker?.title}</h3>
      <Photos image={sneaker?.image} />
      <Text sneaker={sneaker} />
    </div>
  );
};
export default Sneaker;
