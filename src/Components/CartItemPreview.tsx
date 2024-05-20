import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Store/store';
import { addedToCart, deletedFromCart, addOneItem } from '../Store/CartSlice/CartSlice';

import sweet from '../assets/sweet1/sweet1.avif';
import classes from './CartItemPreview.module.scss';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  setOpenCart: Dispatch<SetStateAction<boolean>>;
  openCart: boolean;
};
const CartItemPreview = ({ setOpenCart, openCart }: Props) => {
  const dispatch = useDispatch();
  const stateData = useSelector((state: RootState) => state.carting.cartItems);
  const totalAmount = useSelector((state: RootState) => state.carting.totalAmount);
  const totalQuantity = useSelector((state: RootState) => state.carting.totalQuantity);

  const handleCartOpen = () => {
    setOpenCart(!openCart);
  };

  return (
    <div className={classes.previewWrap}>
      <h2 className={classes.pageTitle}>Shopping Cart</h2>
      <span className={classes.pageClose} onClick={handleCartOpen}>
        &#10005;
      </span>

      {stateData.map((item) => (
        <>
          <ul className={classes.itemsList}>
            {/* <li>{item.id}</li> */}
            <div className={classes.itemNameWrap}>
              <li className={classes.itemName}>{item.name}</li>
              <img className={classes.itemPicture} src={sweet} alt="hoodie" />
            </div>
            <div className={classes.mobileViewWrap}>
              <div className="flex flex-row gap-5">
                <button onClick={() => dispatch(deletedFromCart(item))}>-</button>
                <li>{item.quantity}</li>
                <button onClick={() => dispatch(addOneItem(item))}>+</button>
              </div>
              <li>{item.size}</li>
              <li>{item.price}</li>
            </div>
          </ul>
        </>
      ))}

      <div className={classes.subtotalWrap}>
        {totalAmount ? (
          <div className={classes.totalCheckWrap}>
            <span>SubTotal {totalQuantity}</span>
            <span>{totalAmount} GRN</span>
          </div>
        ) : (
          <div className={classes.emptyCart}>
            <span>Your Cart is Empty</span>
          </div>
        )}

        {/* <Link to="/checkout"> */}

        {/* </Link> */}
      </div>
      {totalAmount ? (
        <div className={classes.buttonWrap}>
          <button className={classes.button}>checkout </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CartItemPreview;
