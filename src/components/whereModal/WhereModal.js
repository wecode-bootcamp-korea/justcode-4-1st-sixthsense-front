import React, { useEffect, useState } from 'react';
import style from './WhereModal.module.css';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import BlackButton from '../BlackButton/BlackButton';

function WhereModal({ modalRef, closeModal }) {
  const [selectCountry, setSelectCountry] = useState(null);
  const [countries, setCountries] = useState([
    {
      id: 1,
      isDomestic: false,
      city: '베트남',
    },
  ]);
  const [domestic, setDomestic] = useState([
    {
      id: 1,
      name: '경기',
    },
  ]);

  useEffect(() => {
    setCountries(mockCountry);
    fetch('http://localhost:8000/dormitories/cities', { method: 'GET' })
      .then(res => res.json())
      .then(res => setDomestic(res.data));
  }, []);

  const clicked = e => {
    setSelectCountry(e.currentTarget.innerText);
  };

  const reset = () => setSelectCountry(null);

  return (
    <div className={style.modalWrapper} ref={modalRef}>
      <div className={style.modal}>
        <div className={style.titleWrapper}>
          <div className={style.modalTitle}>
            <p className={style.whereText}>어디로떠날까요?</p>
            <AiOutlineClose
              className={style.closeModal}
              size="50"
              id="modalClose1"
              onClick={() => {
                closeModal();
                reset();
              }}
            />
          </div>
        </div>
        <div className={style.inputWrapper}>
          <AiOutlineSearch size="24" className={style.searchIcon} />
          <div className={style.inputShape}>
            <input
              className={style.inputText}
              placeholder="원하는 스테이/지역을 검색해 보세요."
            />
          </div>
        </div>
        <div className={style.location}>
          <div className={style.locationWrapper}>
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
          <div className={style.locationWrapper}>
            <p className={style.domOrAbr}>해외</p>
            <ul className={style.cities}>
              {countries.map(country => {
                if (!country.isDomestic) {
                  if (country.city === selectCountry) {
                    return (
                      <li
                        className={style.city}
                        key={country.id}
                        onClick={clicked}
                        style={{
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
        <div className={style.btnWrapper}>
          <button className={style.searchBtn}>search &nbsp; &nbsp; →</button>
        </div>
      </div>
    </div>
  );
}

export default WhereModal;

const mockCountry = [
  {
    id: 1,
    isDomestic: false,
    city: '베트남',
  },
  {
    id: 2,
    isDomestic: false,
    city: '태국',
  },
  {
    id: 3,
    isDomestic: false,
    city: '대만',
  },
  {
    id: 4,
    isDomestic: false,
    city: '싱가폴',
  },
  {
    id: 5,
    isDomestic: false,
    city: '인도네시아',
  },
  {
    id: 6,
    isDomestic: false,
    city: '말레이시아',
  },
  {
    id: 7,
    isDomestic: false,
    city: '필리핀',
  },
  {
    id: 8,
    isDomestic: false,
    city: '라오스',
  },
  {
    id: 9,
    isDomestic: false,
    city: '캄보디아',
  },
  {
    id: 10,
    isDomestic: false,
    city: '몰디브',
  },
];
