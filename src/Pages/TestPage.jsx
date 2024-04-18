import React, { useState, useRef } from 'react';
import { Link, useNavigate  } from 'react-router-dom';

import Sleep from '../assets/RowdYSleep.gif';
import Woke from '../assets/RowdYWoke.gif';
import cursor from '../cursor.png';

const TestPage = () => {
  const navigate = useNavigate();
  const [imgs, setImgs] = useState(true);
  const imageRef = useRef();

  const clickImageHadler = () => {
    let img = document.querySelector('#indigo');
    
      img.src = Woke;

     
      setTimeout(() => {
        navigate('/');
      }, 7000);

//     if (imgs) {
//       setImgs(false);
//       img.src = { Woke };
//     } else {
//       img.src = { Sleep };
//     }
  };

  return (
    <>
    <div className="logoWrapper">
    <img className="Imageitself" onClick={clickImageHadler} src={Sleep} id="indigo" />;

    <img className="Imageitself2" src={cursor} /> 
    </div>
    </>
    )
};

export default TestPage;
