import React from 'react';
import Header from '../Components/Header';
type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div className="paddingValue">
      <Header />
      <span className='text-[35px]'>About</span>
    </div>
  );
};

export default AboutPage;
