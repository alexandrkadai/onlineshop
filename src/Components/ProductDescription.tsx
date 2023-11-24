import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Store/actions';
import { useState } from 'react';

import { RootState } from '../Store/store';
import classes from './ProductDescription.module.scss';
import { addedToCart } from '../Store/CartSlice/CartSlice';

// import Button from '../Ui/Button';


type Props = {
  id: number;
  name: string;
  size: string;
  quantity: number;
};

const ProductDescription = (props: Props) => {
  const [count, setCount] = useState(1);
  const [optionsState, setOptionsState] = useState('');
  
  const caryItemState = useSelector((state: RootState) => state.carting.cartItems);
  const dispatch = useDispatch();

  const handleAddToCart = (item: Props) => {
    if(optionsState === ''){
      alert('pleaseSelctSize');
      } else {

    dispatch(addedToCart({ id: 1, name: 'super', size: optionsState, quantity: count }));
  }
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionsState(event.target.value);
  }

  const handleCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const handleMinusCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCount(count - 1);
    if (count <= 1) {
      setCount(1);
    }
  };

  return (
    <div className={classes.descriptionWrap}>
      <span className={classes.productName}>Neviebenna Skatertyna</span>
      <span className={classes.productPrice}>2000 grn.</span>
      <div className={classes.selectionWrap}>
        <label htmlFor="size " className={classes.sizeTitle}>
          Size
        </label>
        <select name="size" id="sizeSelect" defaultValue='' onChange={handleSelectChange} className={classes.sizeSelection}>
          <option value="">Select Size</option>
          <option value="m">m</option>
          <option value="l">l</option>
        </select>
      </div>

      <div className={classes.quantityWrap}>
        <span className={classes.quantityTitle}>Quantity</span>

        <span>
          <button onClick={handleCount}>+</button> {count}
          <button onClick={handleMinusCount}>-</button>
        </span>
      </div>

      {/* <Button /> */}
      <button className={classes.button} onClick={() => handleAddToCart(props)}>
        Add To Cart
      </button>
      <p className={classes.itemDesription}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
      </p>
      
      <p>
        {caryItemState.map((item) => (
          <div>
            <li>{item.name}</li>
            <li>{item.quantity}</li>
            <li>{item.size}</li>
          </div>
        ))}
      </p>
    </div>
  );
};

export default ProductDescription;
