import ProductDescription from '../Components/ProductComponents/ProductDescription';
import ProductImages from '../Components/ProductComponents/ProductImages';

const OneProduct = () => { 
  return (
    <div className="paddingValueChildren">
      <section className="flex-col-reverse flex pb-[300px] sm:flex-row w-full sm:mt-[133px] sm:gap-x-50 ">
        <ProductImages />
        <ProductDescription />
      </section>
    </div>
  );
};

export default OneProduct;

