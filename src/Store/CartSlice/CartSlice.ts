import { createSlice } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  size: string;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  totalQuantity: number;
}

const initialState: CartState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'carting',
  initialState,
  reducers: {
    addedToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);
      var allItemstotal = 0;
      if (existingItem?.size === newItem.size) {
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
    },
    deletedFromCart: (state, action) => {
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
    },
  },
});

export default cartSlice.reducer;

export const { addedToCart, deletedFromCart } = cartSlice.actions;
