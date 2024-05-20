import { useSelector } from 'react-redux';
import { RootState } from '../Store/store';
import ProductCard from '../Components/ProductComponents/ProductCard';
import AnimationComp from '../Components/Ui/AnimationComp';

function MainPage() {
  const animateState = useSelector((state: RootState) => state.animate.animate);

  return (
    <>
      {animateState && <AnimationComp />}
      {!animateState && <main className="paddingValue" id="startingpage">
        <ProductCard />
      </main>}
    </>
  );
}

export default MainPage;
