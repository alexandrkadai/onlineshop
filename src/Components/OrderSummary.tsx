import React, {Fragment} from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../Store/store';

import classes from './OrderSummary.module.scss';



const OrderSummary = () => {
  const stateData = useSelector((state: RootState) => state.carting.cartItems);
  const totalAmount = useSelector((state: RootState) => state.carting.totalAmount);
  const totalQuantity = useSelector((state: RootState) => state.carting.totalQuantity);

  return (
    <Fragment>
    
    <div className={classes.orderSummaryWrap}>
    <h4>Your Order Summary</h4>
      <div className={classes.orderSummary}>
        <div className={classes.orderSummaryItem}>
          {stateData.map((item) => (
            <Fragment>
            <span>{item.name}</span>
            <span>{item.quantity}</span>
            <span>{item.price} GRN</span>
            </Fragment>
          ))}
          </div>

        <div className={classes.orderSummaryItem}>
          <span>Total</span>
          <span>{totalAmount} GRN</span>
        </div>
        </div>
      </div>
     
      </Fragment>
  )
}

export default OrderSummary;