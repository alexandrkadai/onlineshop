import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Store/store';

import { addedToCart, deletedFromCart, addOneItem } from '../Store/CartSlice/CartSlice';

import classes from './CartItemOreview.module.scss';
import { Link } from 'react-router-dom';

const CartItemPreview = () => {
  const dispatch = useDispatch();
  const stateData = useSelector((state: RootState) => state.carting.cartItems);
  const totalAmount = useSelector((state: RootState) => state.carting.totalAmount);
  const totalQuantity = useSelector((state: RootState) => state.carting.totalQuantity);

  return (
    <div className={classes.previewWrap}>
      <h2 className={classes.pageTitle}>Shopping Cart</h2>

      {stateData.map((item) => (
        <>
          <ul className={classes.itemsList}>
            <li>{item.id}</li>
            <li className="font-bold">{item.name}</li>
            <div className='flex flex-row gap-5'>
              <button onClick={() => dispatch(deletedFromCart(item))}>-</button>
              <li>{item.quantity}</li>
              <button onClick={() => dispatch(addOneItem(item))}>+</button>
            </div>
            <li>{item.size}</li>
            <li>{item.price}</li>
          </ul>
        </>
      ))}

      <div className={classes.subtotalWrap}>
        <div className={classes.totalCheckWrap}>
          <span>SubTotal</span>
          <span>{totalQuantity}</span>
          <span>{totalAmount} GRN</span>
        </div>

        <Link to="/checkout">
          <button className={classes.button}>checkout </button>
        </Link>
      </div>
    </div>
  );
};

export default CartItemPreview;
