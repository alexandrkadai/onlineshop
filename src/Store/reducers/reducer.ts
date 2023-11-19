import { ActionTypes, addToCart, deleteFromCart } from '../actions/actions';

interface Count {
  count: number;
}
const countState: Count = {
  count: 0,
};

export interface CartItem {
  id: number;
  name: string;
  size: string;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};


const cartReducer = (state = initialState, action: ActionTypes): CartState => {
    switch (action.type) {
      case addToCart:
        const newItem = action.payload;
        const existingItem = state.cartItems.find(item => item.id === newItem.id);
  
        if (existingItem) {
          // If item already exists in cart, update its quantity
          return {
            ...state,
            cartItems: state.cartItems.map(item =>
              item.id === newItem.id ? { ...item, quantity: item.quantity + newItem.quantity } : item
            ),
          };
        } else {
          // If item doesn't exist, add it to the cart
          return {
            ...state,
            cartItems: [...state.cartItems, newItem],
          };
        }
  
      default:
        return state;
    }
  };
  
  export default cartReducer;