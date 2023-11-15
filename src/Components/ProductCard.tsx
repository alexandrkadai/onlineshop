import shirt from '../assets/shirtTop.png';
import { Link } from 'react-router-dom';

import classes from './ProductCard.module.scss';

type Props = {};

const ProductCard = (props: Props) => {
  return (
    <div className={classes.productWrap}>
      <Link to="/super">
        <img className={classes.productImg} src={shirt} alt="product" />
      </Link>
      <span className={classes.productPrice}>10.99</span>
      <span className={classes.productName}>top shirt</span>
    </div>
  );
};

export default ProductCard;
