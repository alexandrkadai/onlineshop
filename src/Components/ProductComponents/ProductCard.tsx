import sweet1 from '../../assets/sweet1/sweet1.avif';
import { Link } from 'react-router-dom';

import classes from './ProductCard.module.scss';


const ProductCard = () => {
  return (
    <div className={classes.mainWrap}>
    <div className={classes.productWrap}>
      <Link to="/super">
        <img className={classes.productImg} src={sweet1} alt="product" />
      </Link>
      <div className={classes.producttextWrap}>
      <span className={classes.productName}>top shirt</span>
      <span className={classes.productPrice}>3099 &#8372;</span>
      </div>
    </div>
    {/* Never Will Be  */}
    <div className={classes.productWrap}>
      <Link to="/super">
        <img className={classes.productImg} src={sweet1} alt="product" />
      </Link>
      <div className={classes.producttextWrap}>
      <span className={classes.productName}>top shirt</span>
      <span className={classes.productPrice}>3099 &#8372;</span>
      </div>
    </div>
    <div className={classes.productWrap}>
      <Link to="/super">
        <img className={classes.productImg} src={sweet1} alt="product" />
      </Link>
      <div className={classes.producttextWrap}>
      <span className={classes.productName}>top shirt</span>
      <span className={classes.productPrice}>3099 &#8372;</span>
      </div>
    </div>
    {/* Never Will Be  */}
    <div className={classes.productWrap}>
      <Link to="/super">
        <img className={classes.productImg} src={sweet1} alt="product" />
      </Link>
      <div className={classes.producttextWrap}>
      <span className={classes.productName}>top shirt</span>
      <span className={classes.productPrice}>3099 &#8372;</span>
      </div>
    </div>
    </div>
  );
};

export default ProductCard;
