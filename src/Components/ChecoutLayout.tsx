import FormCheckout from './FormsComponent/FormCheckout';
import OrderSummary from './OrderSummary';
import classes from './ChecoutLayout.module.scss';

const ChecoutLayout = () => {
  return (
    <>
    <h4 className='text-center text-[50px] sm:mt-[130px] md:mt-0'>Checkout Page</h4>
    <div className={classes.main}>
      <FormCheckout />
      <OrderSummary />
    </div>
    </>
  );
};

export default ChecoutLayout;
