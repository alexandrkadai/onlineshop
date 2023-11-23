
import Header from '../Components/Header';

import CartItemPreview from '../Components/CartItemPreview';
type Props = {};

const CartPage = (props: Props) => {
  return (
    <div className="paddingValue">
      <Header />

      
      <CartItemPreview />
      
    </div>
  );
};

export default CartPage;
