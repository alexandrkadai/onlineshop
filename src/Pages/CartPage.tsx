import React from 'react';
import Header from '../Components/Header';
import Cart from '../Components/Cart';

type Props = {};

const CartPage = (props: Props) => {
  return (
    <div className="paddingValue">
      <Header />
      <Cart />
    </div>
  );
};

export default CartPage;
