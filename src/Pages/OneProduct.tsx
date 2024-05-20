import Header from '../Components/Header';
import ProductDescription from '../Components/ProductComponents/ProductDescription';
import ProductImages from '../Components/ProductComponents/ProductImages';

const OneProduct = () => { 
  return (
    <div className="paddingValue">
      <Header />
      <section className="flex-col flex sm:flex-row w-full mt-[133px] sm:gap-x-50 ">
        <ProductImages />
        <ProductDescription />
      </section>
    </div>
  );
};

export default OneProduct;

