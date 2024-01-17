import Header from '../Components/Header';
import ProductDescription from '../Components/ProductComponents/ProductDescription';
import ProductImages from '../Components/ProductComponents/ProductImages';
// type Props = {
//   name: string;
//   price?: number;
//   size: string;
// };

const OneProduct = () => { 
  // const data:string[] = ['some', 'fruit'];
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
//Product Descroption =30 % Product images 70% + margin
