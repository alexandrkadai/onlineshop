import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import CartItemPreview from '../CartItemPreview';

import { useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import Header from '../Header';
const Layout = () => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const animateState = useSelector((state: RootState) => state.animate.animate);

  const toggleCart = () => {
    setOpenCart(!openCart);
    console.log(openCart);
  };

  return (
    <>
      <div className="paddingValue">
        <div className="layout">
        {!animateState ? <Header toggleCart={toggleCart} /> : <></>}

          {openCart && <CartItemPreview setOpenCart={setOpenCart} openCart />}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
