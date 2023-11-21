import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { CartState, CartItem } from './reducer';

interface extendedCartState extends CartState {
    payload?: CartItem; 
  } 

export interface RootState {
  SuperCart: extendedCartState;
}
const store = configureStore({
  reducer: {
    SuperCart: cartReducer,
  },
});

export default store;

//5.08 Typed Reducer
