import React, { useEffect, useState, useRef } from 'react';
// import.meta.env.REACT_APP_PUBLIC_NOVA_KEY;
import classes from './FormChecout.module.scss';

const FormCheckout = () => {
  // const apiKey = process.env.REACT_APP_PUBLIC_NOVA_KEY;
  const apiKey = import.meta.env.REACT_APP_PUBLIC_NOVA_KEY;
  let selectElement = document.getElementById('selectInput');
  let warhouseSelect = document.getElementById('warhouseSelect');

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

  //Start typing to see all warhouses 1st step
  const warhouseOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setWarhouuseInput(event.target.value);
    if (warhouseRef.current) {
      setTimeout(() => {
        setWarhouseChoose(warhouseRef.current.value);
        warhouseSelect!.style.display = 'block';
      }, 300);
    }
  };

  //Selecting warhouse that user Wish from warhouse list
  const handleWarhouseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setWarhouuseInput(event.target.value);
    // setWarhouseSetted(event.target.value);
    warhouseSelect!.style.display = 'none';
    setWarhouseW([]);
  };

  var url: string = 'https://api.novaposhta.ua/v2.0/json/';

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
            apiKey: apiKey,
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
          apiKey: apiKey,
          modelName: 'Address',
          calledMethod: 'getWarehouses',
          methodProperties: {
            FindByString: 'Відділення №' + warhouseChoose,
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
      <h4 className={classes.headerTitle}>Відправка</h4>
      <form className={classes.formItslef}>
        <label htmlFor="name">І`мя</label>
        <input type="text" name="name" placeholder="" />

        <label htmlFor="surname">Прізвище</label>
        <input name="surname" type="text" placeholder="" />

        <label htmlFor="phoneNum">Телефон</label>
        <input name="phoneNum" type="tel" placeholder="" />

        <label htmlFor="emailAd">Email адреса</label>
        <input name="emailAd" type="email" placeholder="" />
      </form>

      <div className={classes.deliveryWrap}>
        <h4 className={classes.deliveryTitle}>Країна</h4>
        <div className={classes.warhouseWrap}>
          <label htmlFor="city">Місто доставки</label>
          <input
            className={classes.warhouseWrapInput}
            type="text"
            name="city"
            placeholder="Назва міста"
            value={inputCity}
            onChange={cityOnChangeHandler}
          />

          <select className={classes.warhouses} onChange={handleSelectChange} id="selectInput">
            {city &&
              city.map((item: any) => (
                <option key={item.Description} value={item.Description}>
                  {item.Description}
                </option>
              ))}
          </select>
        </div>

        <div className={classes.warhouseWrap}>
        <label htmlFor="warhouse">Оберіть відділення</label>
          <input
            className={classes.warhouseWrapInput}
            type="text"
            name="warhouse"
            placeholder="Відділення"
            ref={warhouseRef}
            value={warhouseInput}
            onChange={warhouseOnChangeHandler}
          />
          {warhouseInput ? (
            <select
              className={classes.warhousesList}
              onChange={handleWarhouseChange}
              id="warhouseSelect">
              {warhouseW &&
                warhouseW.map((item: any) => (
                  <option key={item.SiteKey} value={item.Description}>
                    {item.Description}
                  </option>
                ))}
            </select>
          ) : (
            <> </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormCheckout;
