import { useState } from 'react'
import c from './Content.module.scss'
import Product from './Product/Product'
import { useSelector } from 'react-redux'
import Image from './Image/Image'
import { RootState } from '../../store'
const Content: React.FC = () => {
  const [search, setSearch] = useState<string>('Поиск')
  const sneakers = useSelector((state: RootState) => state.products.products)
  const filterSneaker = sneakers.filter((s) =>
    s.title.toUpperCase().includes(search.toUpperCase().trim()),
  )
  return (
    <div className={c.wrapper}>
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
        {search === '' || search === 'Поиск'
          ? sneakers.map((s) => (
              <Product
                key={s.id}
                id={s.id}
                image={s.image}
                title={s.title}
                price={s.price}
              />
            ))
          : filterSneaker.map((s) => (
              <Product
                key={s.id}
                id={s.id}
                image={s.image}
                title={s.title}
                price={s.price}
              />
            ))}
      </div>
    </div>
  )
}
export default Content
