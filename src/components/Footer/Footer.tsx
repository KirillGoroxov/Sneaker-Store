import styles from './Footer.module.scss';
import Contacts from './Contacts';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Contacts />
      <p className="mb-2 ml-2 md:mr-[170px] flex items-end">
        Все права защищены ©️
      </p>
      <div></div>
    </footer>
  );
};
export default Footer;
