import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes, addToCart, deleteFromCart } from '../Store/actions';
import { RootState } from '../Store/store';
import { Link } from 'react-router-dom';
import classes from './Cart.module.css';

function Cart() {
  const quantityTotal = useSelector((state: RootState) => state.carting.totalQuantity);

  return (
    <div>
      <Link to="/cart">
        <span>
          cart
          <span> ({quantityTotal})</span>
        </span>
      </Link>
    </div>
  );
}

export default Cart;
