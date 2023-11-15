import React from 'react';
import Button from '../Ui/Button';
import classes from './ProductDescription.module.scss';
type Props = {
  name?: string;
  price?: number;
  size?: string[];
};

const ProductDescription = (props: Props) => {
  return (
    <div className={classes.descriptionWrap}>
      <span>Neviebenna Skatertyna</span>
      <span>2000 GRN.</span>
      <label></label>
      <select name="size" id="sizeSelect">
        <option value="">--Please Select Size</option>
        <option value="m">m</option>
        <option value="l">l</option>
      </select>
      <Button />
      <p className={classes.itemDesription}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.{' '}
      </p>
    </div>
  );
};

export default ProductDescription;
