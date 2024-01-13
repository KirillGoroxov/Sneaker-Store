import { FC } from 'react';
import styles from './Contact.module.scss';

interface IContact {
  img: string;
  info: string;
  href: string;
}
const Contact: FC<IContact> = ({ img, info, href }) => {
  return (
    <div className={styles.contact}>
      <img className={styles[img]} src={`/icons/${img}.svg`} alt={info} />
      <a href={href}>{info}</a>
    </div>
  );
};
export default Contact;
