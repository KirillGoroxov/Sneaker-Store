import styles from './SneakerPage.module.scss';
import Sneaker from '../../components/Sneaker/Sneaker';
const SneakerPage = () => {
  return (
    <div className={styles.container}>
      <Sneaker />
    </div>
  );
};
export default SneakerPage;
