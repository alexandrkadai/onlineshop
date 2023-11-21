// interface Count {
//   count: number;
// }
// const countState: Count = {
//   count: 0,
// };
import { ActionTypes, addToCart, deleteFromCart } from './actions';

export interface CartItem {
  id: number;
  name: string;
  size: string;
  quantity: number;
}

export interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartReducer = (state: CartState = initialState, action: ActionTypes) => {
  switch (action.type) {
    case addToCart:
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If item already exists in cart, update its quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === newItem.id ? { ...item, quantity: item.quantity + newItem.quantity } : item,
          ),
        };
      } else {
        // If item doesn't exist, add it to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      }

    case deleteFromCart:
      if(action.payload){
      const itemToDelete = action.payload;
      
      const stateItem = state.cartItems.find((item) => item.id === itemToDelete.id);

      if (stateItem) {
        if (stateItem?.quantity !== 1) {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === stateItem.id ? { ...item, quantity: item.quantity - 1 } : item,
            ),
          };
        }
      } else {
        const updatedCartItems = state.cartItems.filter((item) => item.id !== itemToDelete.id);

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }
    } else{ 
      return;
    }

    default:
      return state;
  }
};

export default cartReducer;
