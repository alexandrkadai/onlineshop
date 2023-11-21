import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { CartState, CartItem } from './reducer';
import cartingReducer from './CartSlice/CartSlice';
interface extendedCartState extends CartState {
  payload: CartItem;
}

// export interface RootState {
//   SuperCart: extendedCartState;
// }
const store = configureStore({
  reducer: {
    carting: cartingReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
