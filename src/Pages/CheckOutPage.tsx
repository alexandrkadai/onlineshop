import Header from "../Components/Header";
import FormCheckout from '../Components/FormCheckout';
import OrderSummary from "../Components/OrderSummary";
import ChecoutLayout from "../Components/ChecoutLayout";

const CheckOutPage = ()=> {
  return (
    <div className="paddingValue">
        <Header/>
        <ChecoutLayout />
    </div>
  )
}

export default CheckOutPage