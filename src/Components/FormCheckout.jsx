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
        body: {
          apiKey: 'e12072eca09e540b30ebfe2fa0eed6e2',
          modelName: 'Address',
          calledMethod: 'getWarehouses',
          methodProperties: {
            CityName: 'київ',
            Page: '1',
            Limit: '50',
            Language: 'UA',
            
          },
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setCitties(data);
        });
    getDepartment();
    console.log(cities);
  }, [some]);

  return (
    <div>
      <select id="city"></select>
      <form>
        <label htmlFor=""></label>
        <input type="text" placeholder="sometext" />
        <label htmlFor="vity"></label>
        <input name="vity" type="text" placeholder="sometext" />
      </form>

      <div>
        <span>novaPoshta</span>
        <br />
        <button onClick={clickUseHandler}>Click ME </button>
      </div>
    </div>
  );
};

export default FormCheckout;
