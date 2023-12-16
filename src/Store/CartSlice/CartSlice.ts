import { createSlice } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  size: string;
  quantity: number;
  price: number;
}

interface CartState {
  cartItems: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'carting',
  initialState,
  reducers: {
    addedToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id && item.size === newItem.size,
      );

      if (existingItem) {
        // If item already exists in cart, update its quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === newItem.id && item.size === newItem.size
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item,
          ),
          totalQuantity: state.totalQuantity + newItem.quantity,
          totalAmount: state.totalAmount + newItem.price * newItem.quantity,
        };
      } else {
        // If item doesn't exist, add it to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
          totalAmount: state.totalAmount + newItem.price * newItem.quantity,
          totalQuantity: state.totalQuantity + newItem.quantity,
        };
      }
    },

    deletedFromCart: (state, action) => {
      const itemToDelete = action.payload;

      const stateItem = state.cartItems.find(
        (item) => item.id === itemToDelete.id && item.size === itemToDelete.size,
      );

      if (stateItem) {
        if (stateItem?.quantity > 1) {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === stateItem.id && item.size === stateItem.size
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            ),
            totalQuantity: state.totalQuantity - 1,
            totalAmount: state.totalAmount - stateItem.price,
          };
        } else {
          const updatedCartItems = state.cartItems.filter(
            (item) => !(item.id === itemToDelete.id && item.size === itemToDelete.size),
          );

          return {
            ...state,
            cartItems: updatedCartItems,
            totalQuantity: state.totalQuantity - 1,
            totalAmount: state.totalAmount - stateItem.price,
          };
        }
      } else {
        return {
          ...state,
        }; // handle the case when the item is not found in the cart
      }
    },
    addOneItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id && item.size === newItem.size,
      );
      if (existingItem) {
        // If item already exists in cart, update its quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === newItem.id && item.size === newItem.size
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
          totalQuantity: state.totalQuantity + 1,
          totalAmount: state.totalAmount + newItem.price ,
        };
      }
    },
  },
});

export default cartSlice.reducer;

export const { addedToCart, deletedFromCart, addOneItem } = cartSlice.actions;
