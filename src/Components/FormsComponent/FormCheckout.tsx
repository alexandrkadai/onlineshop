import React, { useEffect, useState, useRef } from 'react';
import classes from './FormChecout.module.scss';

const FormCheckout = () => {
  let selectElement = document.getElementById('selectInput');

  const warhouseRef = useRef(null);
  const [inputCity, setInputCity] = useState<string>('');

  const [cityChoose, setCitiChoose] = useState<string | null>(null);
  const [city, setCity] = useState([]);

  const [warhouseChoose, setWarhouseChoose] = useState<string | null>(null);

  const [warhouseW, setWarhouseW] = useState([]);

  const [warhouseInput, setWarhouuseInput] = useState<string>('');

  const [optionsState, setOptionsState] = useState<string>('');

  // input for user city to send for city search 1st step
  const cityOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInputCity(event.target.value);
    setTimeout(() => {
      setCitiChoose(event.target.value);
      selectElement!.style.display = 'block';
    }, 2000);
  };

  //Select your city from city list 2nd step
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionsState(event.target.value);
    setInputCity(event.target.value);
    selectElement!.style.display = 'none';
    setCity([]);
  };

  const warhouseOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setWarhouseChoose(warhouseRef.current.value);
  };

  var url: string = 'https://api.novaposhta.ua/v2.0/json/';

  const key: string = 'e12072eca09e540b30ebfe2fa0eed6e2';

  // Find City of Delivery
  useEffect(() => {
    if (cityChoose) {
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
            FindByString: "Відділення №" +warhouseChoose,
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
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Your Name" />

        <label htmlFor="surname">Surname</label>
        <input name="surname" type="text" placeholder="Your Surname" />

        <label htmlFor="phoneNum">Phone Number</label>
        <input name="phoneNum" type="tel" placeholder="Your Phone" />

        <label htmlFor="emailAd">Email</label>
        <input name="emailAd" type="email" placeholder="Email" />
      </form>

      <div className={classes.deliveryWrap}>
        <h4 className={classes.deliveryTitle}>Delivery by Novaposhta</h4>
        <div className={classes.warhouseWrap}>
          <label htmlFor="city">Enter Your City</label>
          <input
            type="text"
            name="city"
            placeholder="City Name"
            value={inputCity}
            onChange={cityOnChangeHandler}
          />

          <select className={classes.warhouses} onChange={handleSelectChange} id="selectInput">
            {city ? (
              city.map((item: any) => (
                <option key={item.Description} value={item.Description}>
                  {item.Description}
                </option>
              ))
            ) : (
              <option>loading</option>
            )}
          </select>
        </div>

        <div className={classes.warhouseWrap}>
          <input
            type="text"
            name="warhouse"
            placeholder="Start Enter warhouse"
            ref={warhouseRef}
            onChange={warhouseOnChangeHandler}
          />
          <select className={classes.warhousesList}>
            <option>Виберіть Відділення</option>
            {warhouseW ? (
              warhouseW.map((item: any) => (
                <option key={item.SiteKey} value={item.Description}>
                  {item.Description}
                </option>
              ))
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
