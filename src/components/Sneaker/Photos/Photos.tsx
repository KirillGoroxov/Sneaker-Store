import { MouseEvent, useState } from 'react';
import styles from './Photos.module.scss';
import { nanoid } from 'nanoid';

const Photos = ({ image }: { image: string | undefined }) => {
  const sixHundreds = window.screen.width > 600;
  const [selectPhoto, setSelectPhoto] = useState<string>('1');
  const [classPhoto, setClassPhoto] = useState<string>(styles.main_photo);
  const [modal, setModal] = useState(false);
  const nums = ['1', '2', '3', '4'];
  const clickSneaker = (e: MouseEvent<HTMLImageElement>) => {
    if (sixHundreds) {
      setClassPhoto(styles.animation);
      setTimeout(() => setClassPhoto(''), 300);
      const id = (e.target as HTMLImageElement).id.split('-')[1];
      setSelectPhoto(id);
    }
  };
  const onModal = () => {
    if (sixHundreds) {
      const header = document.getElementById('header') as HTMLHeadElement;
      !modal ? (header.style.opacity = '0') : (header.style.opacity = '1');
      setModal(!modal);
    }
  };
  return (
    <div className={styles.photos}>
      {sixHundreds && (
        <div className={classPhoto}>
          <img
            src={image + selectPhoto + '.jpg'}
            alt="sneaker"
            onClick={onModal}
          />
        </div>
      )}
      <div className={styles.library}>
        {nums.map((sneaker) => {
          return (
            <img
              key={nanoid()}
              onClick={clickSneaker}
              src={`${image}${sneaker}.jpg`}
              id={`sneaker-${sneaker}`}
            />
          );
        })}
      </div>
      {modal && (
        <div className={styles.modal} onClick={onModal}>
          <img src={image + selectPhoto + '.jpg'} alt="sneak" />
        </div>
      )}
    </div>
  );
};
export default Photos;
