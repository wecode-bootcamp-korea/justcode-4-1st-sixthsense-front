import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import style from './ListWhereModal.module.css';

function ListWhereModal({ setTitle, modalRef, closeModal }) {
  const [selectCountry, setSelectCountry] = useState(null);
  const [countries, setCountries] = useState([
    {
      id: 1,
      isDomestic: true,
      city: '',
    },
  ]);
  const [domestic, setDomestic] = useState([
    {
      id: 1,
      name: '경기',
    },
  ]);

  useEffect(() => {
    fetch('http://localhost:8000/dormitories/cities', { method: 'GET' })
      .then(res => res.json())
      .then(result => setDomestic(result.data));
  }, []);

  const clicked = e => {
    setSelectCountry(e.currentTarget.innerText);
    setTitle(e.currentTarget.innerText);
    closeModal();
  };
  const reset = () => setSelectCountry(null);

  return (
    <section
      className={style.modalWrapper}
      ref={modalRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        paddingRight: 0,
      }}
    >
      <div
        className={style.modal}
        style={{
          width: 1200,
          height: 500,
          marginTop: '10%',
          paddingRight: 100,
        }}
      >
        <div className={style.titleWrapper} style={{ margin: 'auto' }}>
          <div
            className={style.modalTitle}
            style={{
              display: 'flex',
              width: 1000,
              paddingRight: 0,
            }}
          >
            <p className={style.whereText}>어디로 떠날까요?</p>
            <AiOutlineClose
              className={style.closeModal}
              size="50"
              id="modalClose1"
              style={{ paddingRight: 0, marginLeft: 50 }}
              onClick={() => {
                closeModal();
                reset();
              }}
            />
          </div>
        </div>
        <div className={style.location} style={{ paddingTop: 30 }}>
          <div
            className={style.locationWrapper}
            style={{ width: 500, flexWrap: 'wrap' }}
          >
            <p className={style.domOrAbr}>국내</p>
            <ul className={style.cities}>
              {domestic.map(city => {
                if (city.name === selectCountry) {
                  return (
                    <li
                      className={style.city}
                      key={city.id}
                      onClick={clicked}
                      style={{
                        marginBottom: 0,
                        paddingRight: 20,
                        background: 'black',
                        color: 'whitesmoke',
                        borderRadius: '30px',
                        boxShadow: '6px 7px 15px 0 rgb(0 0 0 / 30%)',
                      }}
                    >
                      {city.name}
                    </li>
                  );
                } else {
                  return (
                    <li className={style.city} key={city.id} onClick={clicked}>
                      {city.name}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div
            className={style.locationWrapper}
            style={{ width: 500, flexWrap: 'wrap' }}
          >
            <p className={style.domOrAbr}>해외</p>
            <ul className={style.cities} style={{ marginBottom: 0 }}>
              {countries.map(country => {
                if (!country.isDomestic) {
                  if (country.city === selectCountry) {
                    return (
                      <li
                        className={style.city}
                        key={country.id}
                        onClick={clicked}
                        style={{
                          marginBottom: 0,
                          paddingRight: 20,
                          background: 'black',
                          color: 'whitesmoke',
                          borderRadius: '30px',
                          boxShadow: '6px 7px 15px 0 rgb(0 0 0 / 30%)',
                        }}
                      >
                        {country.city}
                      </li>
                    );
                  } else {
                    return (
                      <li
                        className={style.city}
                        key={country.id}
                        onClick={clicked}
                      >
                        {country.city}
                      </li>
                    );
                  }
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ListWhereModal;
