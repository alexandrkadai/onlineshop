import FormCheckout from './FormsComponent/FormCheckout';
import OrderSummary from './OrderSummary';
import classes from './ChecoutLayout.module.scss';

const ChecoutLayout = () => {
  return (
    <>
    
    <div className={classes.main}>
      <FormCheckout />
      <OrderSummary />
    </div>
    </>
  );
};

export default ChecoutLayout;
