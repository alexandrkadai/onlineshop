import Header from '../Components/Header';
import ProductDescription from '../Components/ProductDescription';
import ProductImages from '../Components/ProductImages';
type Props = {};

const OneProduct = (props: Props) => {
  return (
    <div className='paddingValue'>
      <Header />
        <section className='flex flex-row items-center w-full'>
            <ProductDescription/> 
            <ProductImages/>
        </section>
    </div>
  );
};

export default OneProduct;
//Product Descroption =30 % Product images 70% + margin 