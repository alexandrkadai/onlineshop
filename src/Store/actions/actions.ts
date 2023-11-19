export const addToCart = 'ADDINGTOCART';
export const deleteFromCart = 'DELETEFROMCART';
import { CartItem } from '../reducers/reducer';
interface AddingAction {
  type: typeof addToCart;
  payload: CartItem;
}

interface DeletingAction {
  type: typeof deleteFromCart;
}

export type ActionTypes = AddingAction | DeletingAction;
