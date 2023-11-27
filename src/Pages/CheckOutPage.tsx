import ChecOut from "../Components/ChecOut";
import Header from "../Components/Header";
import FormComponent from "../Components/FormComponent";
type Props = {}

const CheckOutPage = (props: Props) => {
  return (
    <div className="paddingValue">
        <Header/>
        <FormComponent/>
        <ChecOut/>
    </div>
  )
}

export default CheckOutPage