import { FC, useState } from 'react';
import c from './Content.module.scss';
import Product from './Product/Product';
import { useSelector } from 'react-redux';
import Image from './Image/Image';
import { nanoid } from 'nanoid';
import { RootState } from '../../store';
const Content: FC = () => {
  const [search, setSearch] = useState<string>('Поиск');
  const sneakers = useSelector((state: RootState) => state.sneakers);
  const filterSneaker = sneakers.filter((s) =>
    s.title.toUpperCase().includes(search.toUpperCase().trim())
  );
  const sneakersList =
    search === '' || search === 'Поиск' ? sneakers : filterSneaker;
  return (
    <>
      <Image />
      <div className={c.search}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setSearch('')}
          onBlur={() => search === '' && setSearch('Поиск')}
        />
      </div>
      <div className={c.sneakers}>
        {sneakersList.map((s) => (
          <Product
            key={nanoid()}
            id={s.id}
            image={s.image}
            title={s.title}
            price={s.price}
          />
        ))}
      </div>
    </>
  );
};
export default Content;
