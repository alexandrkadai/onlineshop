import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Store/store';

import { addedToCart,deletedFromCart } from '../Store/CartSlice/CartSlice';

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
          <li>{item.quantity}</li>
          <li>{item.size}</li>
          <li>{item.price}</li>
        </ul>
        <button onClick={() => dispatch(deletedFromCart(item))}>Delete</button>
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
