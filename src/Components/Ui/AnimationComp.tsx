import { useDispatch } from 'react-redux';
import { setAnimate } from '../../Store/AnimationSlice/AnimationSlice';
import Sleep from '../../assets/RowdYSleep.gif';
import Woke from '../../assets//RowdYWoke.gif';

const AnimationComp = () => {
  const dispatch = useDispatch();

  document.body.style.overflow = 'hidden';

  const clickImageHadler = () => {
    let sleep: HTMLImageElement = document.querySelector('#sleepImg');
    let wrp: HTMLImageElement = document.querySelector('#aniWrap');
    let woke: HTMLImageElement = document.querySelector('#wokeImg');
    sleep.style.cssText = 'display: none';
    woke.style.cssText = 'display: block';
    setTimeout(() => {
      setTimeout(() => {
        wrp.style.display = 'none';
        dispatch(setAnimate());
        document.body.style.overflow = 'visible';
      }, 500);
    }, 6000);
  };

  // setTimeout(() => {
  //   dispatch(setAnimate());
  // }, 7000);

  return (
    <>
      <div className="w-[100vw] h-[100vh] cursor-pointer bg-[#fcfcff]" id="aniWrap" onClick={clickImageHadler}>
        <div className="absolute top-28 left-0 right-0 m-auto text-center">
          <img
            className="absolute top-10 left-0 right-0 m-auto text-center w-96 block"
            src={Sleep}
            id="sleepImg"
            loading="eager"
            alt="git animation rowsy sleep"
          />
          <img
            className="none absolute top-10 left-0 right-0 m-auto text-center w-96 hidden"
            src={Woke}
            id="wokeImg"
            loading="eager"
            alt="git animation rowsy woke"
          />
          {/* <span className="absolute top-96 left-0 right-0 m-auto text-center cursor-pointer">
            Start
          </span> */}
        </div>
      </div>
    </>
  );
};

export default AnimationComp;
