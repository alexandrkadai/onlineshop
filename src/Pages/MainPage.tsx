import React from 'react';

import Header from '../Components/Header';
import ProductCard from '../Components/ProductCard';
type Props = {};

function MainPage({}: Props) {
  return (
    <div className="paddingValue">
     
        <Header/>
        <p className='text-[35px] text-center'>Hello U r on Main Page</p>
        <ProductCard/>
      
    </div>
  );
}

export default MainPage;
