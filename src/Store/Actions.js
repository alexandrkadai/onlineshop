// actions.ts
import { ActionTypes } from './ActionTypes';

export interface AddToCartAction {
  type: ActionTypes.ADD_TO_CART;
  payload: { id: number; name: string; price: number };
}

export interface RemoveFromCartAction {
  type: ActionTypes.REMOVE_FROM_CART;
  payload: { id: number };
}

export const addToCart = (id: number, name: string, price: number): AddToCartAction => ({
  type: ActionTypes.ADD_TO_CART,
  payload: { id, name, price },
});

export const removeFromCart = (id: number): RemoveFromCartAction => ({
  type: ActionTypes.REMOVE_FROM_CART,
  payload: { id },
});
