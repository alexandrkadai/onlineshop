import React, { useEffect, useState } from 'react';
import classes from './FormChecout.module.scss';

const FormCheckout = () => {
  const [cityChoose, setCitiChoose] = useState<string | null>(null);
  const [city, setCity] = useState([]);
  
  const [warhouseChoose, setWarhouseChoose] = useState<string | null>(null);
  const [warhouseW, setWarhouseW] =  useState([]);

  const [optionsState, setOptionsState] = useState<string>('');

  const cityOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTimeout(() => {
    setCitiChoose(event.target.value);
    }, 2000);
  };

  const warhouseOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setWarhouseChoose(event.target.value);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionsState(event.target.value);
  };

  var url:string = 'https://api.novaposhta.ua/v2.0/json/';

  const key: string = 'e12072eca09e540b30ebfe2fa0eed6e2';

  // Find City od Delivery
  useEffect(() => {
    if(cityChoose){
    const getDepartment = async (): Promise<any> =>
      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          apiKey: key,
          modelName: 'Address',
          calledMethod: 'getCities',
          methodProperties: {
            FindByString: cityChoose,
          },
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setCity(data.data);
        });
    getDepartment();
      }
  }, [cityChoose]);

  // Choose an delivery warehouse
  useEffect(() => {
    const getDepartment = async (): Promise<any> =>
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
            CityName: optionsState,
            Page: '1',
            Limit: '50',
            Language: 'UA',
          },
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setWarhouseW(data.data);
        });
    getDepartment();

    
  }, [warhouseChoose]);

  return (
    <div className={classes.fromWraper}>
      <h4 className={classes.headerTitle}>Delivery Information</h4>
      <form className={classes.formItslef}>
        <label htmlFor="name">Enter Your Name</label>
        <input type="text" name="name" placeholder="Your Name" />

        <label htmlFor="surname">Enter Your Surname</label>
        <input name="surname" type="text" placeholder="Your Surname" />

        {/* <label htmlFor="city">Enter Your City</label>
        <input type="text" name="city" placeholder="City Name" onChange={cityOnChangeHandler} /> */}
      </form>

      <div className="mt-[30px]">
        <h4 className={classes.deliveryTitle}>Delivery Method</h4> <br />
        <span className="text-[20px]">Nova Poshta</span>
        <br />
        
        <div className={classes.warhouseWrap}>
        <label htmlFor="city">Enter Your City</label>
        <input type="text" name="city" placeholder="City Name" onChange={cityOnChangeHandler} />

          <select className={classes.warhouses} value={optionsState} onChange={handleSelectChange}>
            {city ? city.map((item: any) => (
              <option key={item.Description} value={item.Description}>{item.Description}</option>
            )) : <option> loading </option>}
          </select>

          </div>

        <div className={classes.warhouseWrap}>
          <select className={classes.warhouses} >
            <option>Виберіть Відділення</option>
            {warhouseW ? (
              warhouseW.map((item: any) => <option key={item.SiteKey} value={item.Description}>{item.Description}</option>)
            ) : (
              <option>loading</option>
            )}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FormCheckout;
