import shirt from'../assets/shirtTop.png';

import classes from './ProductCard.module.scss';

type Props = {}

const ProductCard = (props: Props) => {
  return (
    <div className={classes.productWrap}>
    <img  className={classes.productImg} src={shirt} alt="product"/>
    <span className={classes.productPrice}>10.99</span>
    <span className={classes.productName}>top shirt</span>
    </div>
  )
}

export default ProductCard