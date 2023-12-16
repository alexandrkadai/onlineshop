import React, { useEffect, useState } from 'react';
import classes from './FormChecout.module.scss';

type DataT ={
  data: {}[];
}

const FormCheckout = () => {
  const [some, setSome] = useState<string | null>(null);
  const [cities, setCitties] = useState([]);
 

  const clickUseHandler = (event:React.MouseEvent) => {
    event.preventDefault();
    setSome('superStaff');
  };

  useEffect(() => {
    var url = 'https://api.novaposhta.ua/v2.0/json/';
    const key:string = 'e12072eca09e540b30ebfe2fa0eed6e2';
    const getDepartment = async(): Promise<any> =>
      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          apiKey: key,
          modelName: 'Address',
          calledMethod: 'getWarehouses',
          methodProperties: {
            CityName: 'житомир',
            Page: '1',
            Limit: '50',
            Language: 'UA',
          },
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setCitties(data.data);
        });
    getDepartment();

    console.log(cities);

  }, [some]);

  return (
    <div className='mt-[133px]'>
      
      <form className={classes.formItslef}>
        <label  htmlFor="name">Enter Your Name</label>
        <input type="text" name="name" placeholder="Your Name"/>

        <label htmlFor="surname">Enter Your Surname</label>
        <input name="surname" type="text" placeholder="Your Surname" />

        <label htmlFor="city">Enter Your City</label>
        <input type="text" name="city" placeholder="City Name"  />

       
      </form>

      <div className='mt-[30px]'>
        <span>Delivery</span>  <br />
        <span className='text-[25px]'>Nova Poshta</span>
        <br />
        <button className="border-[1px] border-black p-[5px]" onClick={clickUseHandler}>Click ME </button>
        <div className='mt-[33px]'>
        <select  className={classes.warhouses} >
          <option>Виберіть Відділення</option>
        {some ? 
          cities.map((item:any) => (
                <option key={item.SiteKey} >{item.Description}</option>
                  )) : <option>loading</option>}
          </select>
          </div>
      </div>
    </div>
  );
};

export default FormCheckout;
