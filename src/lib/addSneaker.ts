import { IBasketItem, addProduct } from '../store/basket';
import { ISneaker } from '../store/sneakers';
import { MouseEvent } from 'react';
import { Dispatch } from '@reduxjs/toolkit';

const addItem = (
  e: MouseEvent<HTMLButtonElement>,
  sneakers: ISneaker[],
  basket: IBasketItem[],
  dispatch: Dispatch
) => {
  const id = Number((e.target as HTMLButtonElement).id.split('-')[1]);
  const sneaker = sneakers.find((i: ISneaker) => i.id === id);
  dispatch(addProduct({ sneaker, basket }));
};

export default addItem;
