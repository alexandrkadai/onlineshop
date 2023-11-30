import { useEffect } from 'react';
import sweet1 from '../assets/sweet1/sweet1.avif';
import sweet2 from '../assets/sweet1/sweet2.avif';
import sweet3 from '../assets/sweet1/sweet3.avif';
import sweet4 from '../assets/sweet1/sweet4.avif';

import classes  from './ProductImages.module.scss';
type Props = {};



const ProductImages = (props: Props) => {
//   useEffect(() =>{
//     var url = 'https://api.novaposhta.ua/v2.0/json/';
//     fetch(url, {method:"POST", 
//   body: {
//     "apiKey": "b4c3f405e2344559fe0c419d861b80c9",
//     "modelName": "Address",
//     "calledMethod": "searchSettlements",
//     "methodProperties": {
//  "CityName" : "київ",
//  "Limit" : "50",
//  "Page" : "2"
//     }
//  }}).then((response) => console.log(response));
// }, []);

  return (
    <div className={classes.mainWrap}>
      <img src={sweet1} alt="sweet1" />
      <img src={sweet2} alt="sweet2" />
      <img src={sweet3} alt="sweet3" />
      <img src={sweet4} alt="sweet4" />
    </div>
  );
};

export default ProductImages;
