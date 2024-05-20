import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { CartState, CartItem } from './reducer';
import cartingReducer from './CartSlice/CartSlice';
import animatingReducer from './AnimationSlice/AnimationSlice';
interface extendedCartState extends CartState {
  payload: CartItem;
}

// export interface RootState {
//   SuperCart: extendedCartState;
// }
const store = configureStore({
  reducer: {
    carting: cartingReducer,
    animate: animatingReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
