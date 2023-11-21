export const addToCart = 'ADDINGTOCART';
export const deleteFromCart = 'DELETEFROMCART';

import { CartItem } from './reducer';

interface AddingAction {
  type: typeof addToCart;
  payload: CartItem;
}

interface DeletingAction {
  type: typeof deleteFromCart;
  payload?: CartItem;
}

export type ActionTypes = AddingAction | DeletingAction;
