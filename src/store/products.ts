import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import ProductType from '../сomponets/Content/Product/Product'

export type ProductType = {
  id: string
  image: string
  title: string
  price: string
}
type ProductState = {
  products: ProductType[]
}
const initialState: ProductState = {
  products: [
    {
      id: nanoid(),
      image: './../../../images/adidas/forum_mid/',
      title: 'ADIDAS Forum Mid',
      price: '9999',
    },
    {
      id: nanoid(),
      image: './../../../images/adidas/niteball/',
      title: 'ADIDAS Niteball',
      price: '19999',
    },
    {
      id: nanoid(),
      image: './../../../images/adidas/niteball_ll/',
      title: 'ADIDAS Niteball ll',
      price: '19999',
    },
    {
      id: nanoid(),
      image: './../../../images/adidas/ozelia/',
      title: 'ADIDAS Ozelia',
      price: '14999',
    },
    {
      id: nanoid(),
      image: './../../../images/adidas/ozweego/',
      title: 'ADIDAS Ozweego',
      price: '12999',
    },
    {
      id: nanoid(),
      image: './../../../images/adidas/streetball/',
      title: 'ADIDAS Streetball',
      price: '19999',
    },
    {
      id: nanoid(),
      image: './../../../images/adidas/streetball_ll/',
      title: 'ADIDAS Streetball ll',
      price: '15999',
    },
    {
      id: nanoid(),
      image: './../../../images/adidas/zx_700/',
      title: 'ADIDAS ZX 700',
      price: '8999',
    },
    {
      id: nanoid(),
      image: './../../../images/puma/future_rider_displaced/',
      title: 'PUMA Future Rider Displaced',
      price: '13999',
    },
    {
      id: nanoid(),
      image: './../../../images/puma/prevail/',
      title: 'PUMA Prevail',
      price: '9999',
    },
    {
      id: nanoid(),
      image: './../../../images/puma/rs-x_mid/',
      title: 'PUMA RS-X mid',
      price: '17999',
    },
    {
      id: nanoid(),
      image: './../../../images/puma/rs-x_winterized/',
      title: 'PUMA RS-X winterized',
      price: '16999',
    },
    {
      id: nanoid(),
      image: './../../../images/puma/rs-z_reinvention/',
      title: 'PUMA RS-Z reinvention',
      price: '13999',
    },
    {
      id: nanoid(),
      image: './../../../images/puma/suede_classic_xxl/',
      title: 'PUMA Suede Classic XXl',
      price: '9999',
    },
    {
      id: nanoid(),
      image: './../../../images/puma/trc_blaze/',
      title: 'PUMA TRC Blaze',
      price: '15999',
    },
    {
      id: nanoid(),
      image: './../../../images/puma/trc_blaze_hc/',
      title: 'PUMA TRC Blaze HC',
      price: '18999',
    },
    {
      id: nanoid(),
      image: './../../../images/puma/wild_rider_mid/',
      title: 'PUMA Wild Rider Mid',
      price: '15999',
    },
    {
      id: nanoid(),
      image: './../../../images/nike/',
      title: 'NIKE Air Huarache ',
      price: '12999',
    },
  ],
}
const products = createSlice({
  name: 'products',
  initialState,
  reducers: {},
})
export default products.reducer
