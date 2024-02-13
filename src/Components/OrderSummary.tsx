import { useSelector } from 'react-redux';
import { RootState } from '../Store/store';

import classes from './OrderSummary.module.scss';

const OrderSummary = () => {
  const stateData = useSelector((state: RootState) => state.carting.cartItems);
  const totalAmount = useSelector((state: RootState) => state.carting.totalAmount);
  const totalQuantity = useSelector((state: RootState) => state.carting.totalQuantity);

  return (
    <div className={classes.orderSummaryWrap}>
      <h4>Your Order Summary</h4>
      <div className={classes.orderSummaryItems}>
        {stateData.map((item) => (
          <div className={classes.orderSummaryItem}>
            <span className={classes.summaryItemTex}>{item.name}</span>
            <span className={classes.summaryItemQua}>{item.quantity}</span>
            <span className={classes.summaryItemPrice}>{item.price} GRN</span>
          </div>
        ))}
      </div>

      <div className={classes.orderSummaryTotal}>
        <span className={classes.totalTetx}>Total :</span>
        <span className={classes.totalAmount}>{totalAmount} GRN</span>
      </div>
      <button className={classes.button}>Procceed</button>
    </div>
  );
};

export default OrderSummary;
