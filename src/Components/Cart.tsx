import bag from '../assets/bag.png';
import classes from './Cart.module.css';
type Props = {};

function Cart({}: Props) {
  return (
    <div>
      <img src={bag} alt="bag" />
    </div>
  );
}

export default Cart;
