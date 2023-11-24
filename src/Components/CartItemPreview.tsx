import { useSelector } from "react-redux"
import { RootState } from "../Store/store";

import classes from './CartItemOreview.module.scss';

type Props = {}

const CartItemPreview = (props: Props) => {
    const stateData = useSelector((state: RootState) => state.carting.cartItems);
  return (
    <div className={classes.previewWrap}>
        <h2 className={classes.pageTitle}>Shopping Cart</h2>

        {stateData.map((item) => (
            <ul className={classes.itemsList}>
                <li>{item.id}</li>
            <li className="font-bold">{item.name}</li>
            <li>{item.quantity}</li>
            <li>{item.size}</li>
            
            </ul>
        ))}

        <div className={classes.subtotalWrap}>
            <div className={classes.totalCheckWrap}>
            <span>SubTotal</span>
            <span>1233 GRN</span>
            </div>
            
            <button className={classes.button}>checkout </button>
        </div>
       
        </div>
  )
}

export default CartItemPreview