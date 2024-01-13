import { FC, useState } from 'react';
import c from './Form.module.scss';
import { nanoid } from '@reduxjs/toolkit';
import Input from './Input';

const Form: FC = () => {
  const [send, setSend] = useState(false);
  const inputs = ['Город', 'Улица', 'Дом', 'Индекс'];
  const submit = () => {
    const values = inputs.map((input, index) => {
      return document.getElementById('input-' + index) as HTMLInputElement;
    });
    // Ищем есть ли пустое значение инпут
    const find = values.find((f) => f.value === '');
    if (!find) {
      window.location.replace('https://kirillgoroxov.ru/shop');
    } else {
      setSend(true);
    }
  };

  return (
    <form className={c.form}>
      {inputs.map((field, index) => {
        return <Input title={field} id={index} key={nanoid()} send={send} />;
      })}
      <input
        type="button"
        className={c.button}
        onClick={submit}
        value="Заказать"
      />
    </form>
  );
};
export default Form;
