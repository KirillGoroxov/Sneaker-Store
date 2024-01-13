import { configureStore } from '@reduxjs/toolkit';
import basket from './basket';
import sneakers from './sneakers';
const store = configureStore({
  reducer: {
    sneakers: sneakers,
    basket: basket,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
