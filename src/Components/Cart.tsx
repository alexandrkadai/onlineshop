import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes, addToCart, deleteFromCart } from '../Store/actions';
import { RootState } from '../Store/store';
import { Link } from 'react-router-dom';
import classes from './Cart.module.css';

type Props = {};

function Cart({}: Props) {
  const quantity = useSelector((state: RootState) => state.carting.cartItems);
  
  return (
    <div>
     <Link to='/cart'> <span> cart 
      {quantity.map((item ) => (
        <span> ({item.quantity})</span>
      ))}
    </span>
    </Link>
    </div>
  );
}

export default Cart;
