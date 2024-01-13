import { FC, useState } from 'react';

interface IInput {
  id: number;
  title: string;
  send: boolean;
}

const Input: FC<IInput> = ({ title, send, id }) => {
  const [value, setValue] = useState('');
  return (
    <>
      <h4 className="text-center">{title}</h4>
      <input
        type="text"
        value={value}
        name="input"
        id={'input-' + id}
        onChange={(e) => setValue(e.target.value)}
      />
      {send && !value && (
        <div className="text-red-700 text-sm text-left">*Заполните поле</div>
      )}
    </>
  );
};
export default Input;
