import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Store/store';
import { Link } from 'react-router-dom';
import { deletedFromCart, addOneItem } from '../Store/CartSlice/CartSlice';
import { Dispatch, SetStateAction } from 'react';
import classes from './CartItemPreview.module.scss';

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
            </div>
            <div className={classes.mobileViewWrap}>
              <li>{item.size}</li>
              <li>{item.price} &#8372;</li>
              <div className="flex flex-row gap-2">
                <button className={classes.btnText} onClick={() => dispatch(deletedFromCart(item))}>
                  &#x2212;
                </button>
                <li>{item.quantity}</li>
                <button className={classes.btnText} onClick={() => dispatch(addOneItem(item))}>
                  &#x2b;
                </button>
              </div>
            </div>
          </ul>
        </>
      ))}

      <div className={classes.subtotalWrap}>
        {totalAmount ? (
          <div className={classes.totalCheckWrap}>
            <span>SubTotal {totalQuantity} Items:</span>
            <span>{totalAmount} UAH</span>
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
        <div className={classes.buttonWrap} onClick={handleCartOpen}>
          <Link to="/checkout">
            <button className={classes.button}>checkout </button>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CartItemPreview;
