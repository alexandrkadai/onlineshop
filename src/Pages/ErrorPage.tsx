import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='text-center mt-[200px]'>
      <h2 className="text-[35px]">This Page Doesn`t exist</h2>
      <h3 className="text-[25px]">You can go back to main Page</h3>
      <Link className='text-[25px] text-bold' to="/">Main Page</Link>
    </div>
  );
};

export default ErrorPage;
