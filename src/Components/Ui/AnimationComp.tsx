import { useDispatch } from 'react-redux';
import { setAnimate } from '../../Store/AnimationSlice/AnimationSlice';
import Sleep from '../../assets/RowdYSleep.gif';
import Woke from '../../assets//RowdYWoke.gif';

const AnimationComp = () => {
  const dispatch = useDispatch();

  const clickImageHadler = () => {
    let img = document.querySelector('#indigo');
    let wrp = document.querySelector('#aniWrap');

    img.src = Woke;

    setTimeout(() => {
      wrp.style.cssText = 'opacity:0; transition: 1s';
      setTimeout(() => {
        wrp.style.display = 'none';
        dispatch(setAnimate());
      }, 500);
    }, 6000);
  };

  return (
    <>
      <div className="w-[100vw] h-[100vh] " id="aniWrap" onClick={clickImageHadler}>
        <div className="absolute top-28 left-0 right-0 m-auto text-center">
          <img className="absolute top-10 left-0 right-0 m-auto text-center" src={Sleep} id="indigo" />
          <span className="absolute top-96 left-0 right-0 m-auto text-center cursor-pointer" >Start</span>
        </div>
      </div>
    </>
  );
};

export default AnimationComp;
