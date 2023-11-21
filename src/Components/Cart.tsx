import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes, addToCart, deleteFromCart } from '../Store/actions';

import classes from './Cart.module.css';
type Props = {};

function Cart({}: Props) {
  return (
    <div>
      <span>cart (0)</span>
    </div>
  );
}

export default Cart;
