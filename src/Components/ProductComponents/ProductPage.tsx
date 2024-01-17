import classes from './ProductPage.module.scss';
import ProductCard from './ProductCard';
type Props = {
  coverImg?: JSX.Element;
  size: number;
  price: number;
  available: boolean;
};

const ProductPage = (props: Props) => {
  return (
    <section className="paddingValue ">
      <ProductCard />
      ProductPage
    </section>
  );
};

export default ProductPage;

// coverImg
// size
// price
// avai
