import Header from '../Components/Header';
import ProductDescription from '../Components/ProductComponents/ProductDescription';
import ProductImages from '../Components/ProductComponents/ProductImages';

const OneProduct = () => { 
  return (
    <div className="paddingValue">
      <Header />
      <section className="flex flex-row w-full mt-[133px]">
        <ProductDescription />
        <ProductImages />
      </section>
    </div>
  );
};

export default OneProduct;

