import { useSelector } from 'react-redux';
import { RootState } from '../Store/store';


type Props ={
  toggleCart: () => void ;
}
const  Cart = ({toggleCart} :Props) => {
  const quantityTotal = useSelector((state: RootState) => state.carting.totalQuantity);

  return (
    <div className='cursor-pointer' onClick={toggleCart}>
      <span>
        Cart
        <span> ({quantityTotal})</span>
      </span>
    </div>
  );
}

export default Cart;
