import AnimationComp from './AnimationComp';
type Props = {
  animateState: boolean;
};
export default function aniModal({ animateState }: Props) {
  return (
    <>
      {animateState && (
        <div className="z-10 absolute w-full h-full top-0 bg-white">
          <AnimationComp />
        </div>
      )}
    </>
  );
}
