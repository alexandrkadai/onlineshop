import { useState } from 'react';
import Button from '../Ui/Button';
import classes from './ProductDescription.module.scss';
type Props = {
  name?: string;
  price?: number;
  size?: string[];
};

const ProductDescription = (props: Props) => {
  const [count, setCount] = useState(1);

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
        <select name="size" id="sizeSelect" className={classes.sizeSelection}>
          <option value="">Select Size</option>
          <option value="m">m</option>
          <option value="l">l</option>
        </select>
      </div>

      <div className={classes.quantityWrap}>
        <span className={classes.quantityTitle}>Quantity</span>
       
        <span> <button onClick={handleCount}>+</button> {count} <button onClick={handleMinusCount}>-</button></span>
        
      </div>

      <Button />
      <p className={classes.itemDesription}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
      </p>
    </div>
  );
};

export default ProductDescription;