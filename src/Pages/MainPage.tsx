import React from 'react';

import Header from '../Components/Header';
type Props = {};

function MainPage({}: Props) {
  return (
    <div className="paddingValue">
        <Header/>
      <p className='text-[35px]'>Hello U r on Main Page</p>
    </div>
  );
}

export default MainPage;
