import { useDispatch } from 'react-redux';
import { setAnimate } from '../../Store/AnimationSlice/AnimationSlice';
import Sleep from '../../assets/RowdYSleep.gif';
import Woke from '../../assets//RowdYWoke.gif';

const AnimationComp = () => {
  const dispatch = useDispatch();
  
  document.body.style.overflow = "hidden";
  const clickImageHadler = () => {
    let img: HTMLImageElement = document.querySelector('#indigo');
    let wrp: HTMLImageElement = document.querySelector('#aniWrap');

    img.src = Woke;

    setTimeout(() => {
      wrp.style.cssText = 'opacity:0; transition: 1s';
      setTimeout(() => {
        wrp.style.display = 'none';
        dispatch(setAnimate());
        document.body.style.overflow = "visible";
      }, 500);
    }, 6000);
  };
  setTimeout(() => {
    dispatch(setAnimate());
    
  }, 7000);

  return (
    <>
      <div className="w-[100vw] h-[100vh] cursor-pointer" id="aniWrap" onClick={clickImageHadler}>
        <div className="absolute top-28 left-0 right-0 m-auto text-center">
          <img className="absolute top-10 left-0 right-0 m-auto text-center" src={Sleep} id="indigo" loading="eager"/>
          <span className="absolute top-96 left-0 right-0 m-auto text-center cursor-pointer" >Start</span>
        </div>
      </div>
    </>
  );
};

export default AnimationComp;
