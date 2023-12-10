import ChecOut from "../Components/ChecOut";
import Header from "../Components/Header";
import FormCheckout from "../Components/FormCheckout";
type Props = {}

const CheckOutPage = (props: Props) => {
  return (
    <div className="paddingValue">
        <Header/>
        <FormCheckout/>
        
    </div>
  )
}

export default CheckOutPage