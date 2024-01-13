import c from './Item.module.scss';
import { useDispatch } from 'react-redux';
import { FC, MouseEvent } from 'react';
import { addItem, deleteItem, deleteSneaker } from '../../../../store/basket';

interface IItem {
  image: string;
  title: string;
  id: number;
  price: string;
  count: number;
}

const Item: FC<IItem> = ({ image, title, id, price, count }) => {
  const dispatch = useDispatch();
  const add = (e: MouseEvent<HTMLImageElement>) =>
    dispatch(addItem((e.target as HTMLImageElement).id));
  const remove = (e: MouseEvent<HTMLImageElement>) => {
    if (count === 1) {
      dispatch(deleteSneaker((e.target as HTMLImageElement).id));
    } else dispatch(deleteItem((e.target as HTMLImageElement).id));
  };
  const removeSneaker = (e: MouseEvent<HTMLImageElement>) => {
    dispatch(deleteSneaker((e.target as HTMLImageElement).id));
  };
  const classItem =
    window.location.pathname === '/delivery' ? 'deliveryItem' : 'item';
  return (
    <div className={c[classItem]}>
      <img src={image + '1.jpg'} className={c.sneaker} alt="sneaker" />
      <div className={c.title}>{title}</div>
      <div className={c.counter}>
        <img src="/icons/plus.svg" alt="add" onClick={add} id={'add-' + id} />
        {count}
        <img
          src="/icons/minus.svg"
          alt="remove"
          onClick={remove}
          id={'remove-' + id}
        />
      </div>
      <div>{Number(price) * count} P</div>
      <img
        className={c.delete}
        id={`delete-${id}`}
        onClick={removeSneaker}
        src="/icons/delete.svg"
        alt="delete"
      />
    </div>
  );
};
export default Item;
