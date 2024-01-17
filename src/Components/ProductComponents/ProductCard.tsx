import sweet1 from '../../assets/sweet1/sweet1.avif';
import { Link } from 'react-router-dom';

import classes from './ProductCard.module.scss';

type Props = {};

const ProductCard = (props: Props) => {
  return (
    <div className={classes.mainWrap}>
    <div className={classes.productWrap}>
      <Link to="/super">
        <img className={classes.productImg} src={sweet1} alt="product" />
      </Link>
      <span className={classes.productPrice}>10.99</span>
      <span className={classes.productName}>top shirt</span>
    </div>
    {/* Never Will Be  */}
    <div className={classes.productWrap}>
      <Link to="/super">
        <img className={classes.productImg} src={sweet1} alt="product" />
      </Link>
      <span className={classes.productPrice}>10.99</span>
      <span className={classes.productName}>top shirt</span>
    </div>
    <div className={classes.productWrap}>
      <Link to="/super">
        <img className={classes.productImg} src={sweet1} alt="product" />
      </Link>
      <span className={classes.productPrice}>10.99</span>
      <span className={classes.productName}>top shirt</span>
    </div>
    <div className={classes.productWrap}>
      <Link to="/super">
        <img className={classes.productImg} src={sweet1} alt="product" />
      </Link>
      <span className={classes.productPrice}>10.99</span>
      <span className={classes.productName}>top shirt</span>
    </div>
    </div>
  );
};

export default ProductCard;
