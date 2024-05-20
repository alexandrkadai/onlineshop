import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import CartItemPreview from '../CartItemPreview';
import Cart from '../Cart';
import Header from '../Header';
const Layout = () => {
  const [openCart, setOpenCart] = useState<boolean>(false);

  const toggleCart = () => {
    setOpenCart(!openCart);
    console.log(openCart);
  };

  return (
    <>
      <div className="paddingValue">
        <div className="layout">
          <Header />

          {openCart && <span>SUper Text</span>}
          {openCart && <CartItemPreview setOpenCart={setOpenCart} openCart />}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
