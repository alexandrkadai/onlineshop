import Header from '../Components/Header';
import ProductCard from '../Components/ProductCard';
type Props = {};

function MainPage({}: Props) {
  return (
    <div className="paddingValue">
     
        <Header/>
       
        <ProductCard/>
      
    </div>
  );
}

export default MainPage;
