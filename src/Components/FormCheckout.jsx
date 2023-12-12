import React, { useEffect, useState } from 'react';
import { NpCitySelect, NpWarehouseSelect, utils } from 'np-select';

const FormCheckout = () => {
  const [some, setSome] = useState(null);
  const [cities, setCitties] = useState();
  const API_KEY = 'e12072eca09e540b30ebfe2fa0eed6e2';

  const clickUseHandler = (event) => {
    event.preventDefault();
    setSome('superStaff');
  };

  useEffect(() => {
    var url = 'https://api.novaposhta.ua/v2.0/json/';
    const key = 'e12072eca09e540b30ebfe2fa0eed6e2';
    const getDepartment = (async) =>
      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          apiKey: 'e12072eca09e540b30ebfe2fa0eed6e2',
          modelName: 'Address',
          calledMethod: 'getWarehouses',
          methodProperties: {
            CityName: 'київ',
            Page: '1',
            Limit: '50',
            Language: 'UA',
          },
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setCitties(data);
        });
    getDepartment();
    console.log(cities);
  }, [some]);

  return (
    <div className='mt-[133px]'>
      
      <form className="mt-[33px] flex flex-col">
        <label htmlFor="vity">Enter Your City</label>
        <input type="text" name="vity" placeholder="City Name"  className='w-[100px]'/>
        <label htmlFor="vity"></label>
        <input name="vity" type="text" placeholder="sometext" />
      </form>

      <div className='mt-[30px]'>
        <span className='text-[25px]'>Nova Poshta</span>
        <br />
        <button className="border-[1px] border-black p-[5px]" onClick={clickUseHandler}>Click ME </button>
        <div className='mt-[33px]'>
        <select  className="list-none" >
        {some ? 
          cities.data.map((item) => (
           
            
               
                <option key={item.SiteKey} >{item.Description}</option>
            

            
          )) : <span>loading</span>}
          </select>
          </div>
      </div>
    </div>
  );
};

export default FormCheckout;
