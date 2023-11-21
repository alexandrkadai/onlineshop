import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes, addToCart, deleteFromCart } from '../Store/actions';
import { RootState } from '../Store/store';
import classes from './Cart.module.css';
type Props = {};

function Cart({}: Props) {
  const quantity = useSelector((state: RootState) => state.carting.cartItems);
  
  return (
    <div>
      <span> cart 
      {quantity.map((item ) => (
        <span> ({item.quantity})</span>
      ))}
    </span>
    </div>
  );
}

export default Cart;
