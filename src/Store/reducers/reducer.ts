import { ActionTypes, addToCart, deleteFromCart } from '../actions/actions';

interface Count {
  count: number;
}
const countState: Count = {
  count: 0,
};

interface CartItem {
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
