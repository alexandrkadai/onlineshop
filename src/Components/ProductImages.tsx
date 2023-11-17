import React from 'react';
import { sweet1, sweet2, sweet3, sweet4 } from '../assets';
import classes  from './ProductImages.module.scss';
type Props = {};

const ProductImages = (props: Props) => {
  return (
    <div className={classes.mainWrap}>
      <img src={sweet1} alt="sweet1" />
      <img src={sweet2} alt="sweet2" />
      <img src={sweet3} alt="sweet3" />
      <img src={sweet4} alt="sweet4" />
    </div>
  );
};

export default ProductImages;
