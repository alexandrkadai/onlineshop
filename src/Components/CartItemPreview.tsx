import { useSelector } from "react-redux"
import { RootState } from "../Store/store";

import classes from './CartItemOreview.module.scss';

type Props = {}

const CartItemPreview = (props: Props) => {
    const stateData = useSelector((state: RootState) => state.carting.cartItems);
  return (
    <div className="paddingValue">
        <h2>Shopping Cart</h2>

        {stateData.map((item) => (
            <ul className={classes.itemsList}>
            <li>{item.name}</li>
            <li>{item.quantity}</li>
            <li>{item.size}</li>
            <li></li>
            </ul>
        ))}
        </div>
  )
}

export default CartItemPreview