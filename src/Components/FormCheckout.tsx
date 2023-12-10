import React, {useEffect} from 'react';

const FormCheckout = () => {
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
    <>
      <form>
        <label htmlFor=""></label>
        <input type="text" />
        <label htmlFor=""></label>
        <input type="text" />
      </form>

      <div>
        <span>novaPoshta</span>
      </div>
    </>
  );
};

export default FormCheckout;
