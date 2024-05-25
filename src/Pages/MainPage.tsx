import { useSelector } from 'react-redux';
import { RootState } from '../Store/store';
import ProductCard from '../Components/ProductComponents/ProductCard';
import AnimationComp from '../Components/Ui/AnimationComp';
import AniModal from '../Components/Ui/AniMOdal';
function MainPage() {
  const animateState = useSelector((state: RootState) => state.animate.animate);

  return (
    <>
    { animateState && 
      <AniModal animateState />}
      {/* {animateState && <AnimationComp />} */}
      {!animateState && <main className="paddingValueChildren" id="startingpage">
        <ProductCard />
      </main>}
    </>
  );
}

export default MainPage;
