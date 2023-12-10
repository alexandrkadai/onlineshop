import React, { useEffect, useState } from 'react';

const FormCheckout = () => {
  const [some, setSome] = useState<string | null>(null);
  const [cities, setCitties] = useState<any>(null);

  const clickUseHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setSome('superStaff');
  };

  useEffect(() => {

    async function getStars() {
      var url = 'https://swapi.dev/api/people/1/';
    const data = await (await fetch(url)).json();
    setCitties(data);
    console.log(cities);
    }

    getStars();
  }, [some]);

  //   useEffect(() => {
  // var url = 'https://api.novaposhta.ua/v2.0/json/';

  // async function getCities() {
  //   await fetch(url, {
  //     method: 'POST',
  //     body: {
  //       apiKey: 'e12072eca09e540b30ebfe2fa0eed6e2',
  //       modelName: 'Address',
  //       calledMethod: 'searchSettlements',
  //       methodProperties: {
  //         CityName: 'київ',
  //         Limit: '50',
  //         Page: '2',
  //       },
  //     },
  //   })
  //     .then((response) => response.json())
  //         .then((data) => setCitties(data));
  //       console.log(cities);
  //     }
  //     getCities();
  //   }, [some]);

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
        <button onClick={clickUseHandler}>Click ME </button>
      </div>

      {cities ?  
            <span>{cities.name}</span>
       : <span>loading</span> }
    </>
  );
};

export default FormCheckout;
