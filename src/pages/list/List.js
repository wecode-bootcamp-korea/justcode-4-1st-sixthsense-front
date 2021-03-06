import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ListWhereButton from './components/Filter/ListWhereButton/ListWhereButton';
import LayOutFirst from './components/Filter/LayOutFirst/LayOutFirst';
import LayOutSecond from './components/Filter/LayOutSecond/LayOutSecond';
import LayOutThird from './components/Filter/LayOutThird/LayOutThird';
import Products from './components/Products/Products';

import style from '../list/List.module.css';

function List() {
  const navigate = useNavigate();
  //하위 창 open & close 관리 state
  const [vis1, setVis1] = useState('hidden');
  const [vis2, setVis2] = useState('hidden');
  const [vis3, setVis3] = useState('hidden');
  //창 1 state
  const [headCountStr, setHeadCountStr] = useState('인원');
  //창 2 state
  const [title, setTitle] = useState('가격범위');
  //창 3 state
  const [checkBoxTitle, setCheckBoxTitle] = useState('스테이 유형');
  //검색(추가구현)

  const gotoListpage = () => {
    navigate('/list');
  };

  const layoutVisibleHandler = e => {
    const index = Number(e.target.id);
    const arr = [
      [vis1, setVis1],
      [vis2, setVis2],
      [vis3, setVis3],
    ];
    arr[index][0] === 'hidden'
      ? arr[index][1]('visible')
      : arr[index][1]('hidden');
  };

  const totalLayourHandler = () => {
    setVis1('hidden');
    setVis2('hidden');
    setVis3('hidden');
  };

  return (
    <div className={style.listWap}>
      <center className={style.listHeaderWap}>
        <p>FIND STAY</p>
        <p>머무는 것 자체로 여행이 되는 공간</p>
      </center>

      <section className={style.listFilter}>
        <div className={style.listFilterSearch}>
          <div>
            <div className={style.searchBar}>
              <p>여행지/숙소</p>
              <input type="search" style={{ paddingLeft: 10 }} />
              <ListWhereButton />
            </div>

            <div className="checkIn">
              <p>체크인</p>
              <div className="calendar">
                <input type="date" />
              </div>
            </div>
            <div className="checkOut">
              <p>체크아웃</p>
              <div className="calendar">
                <input type="date" />
              </div>
            </div>
          </div>
          <div className={style.reButton}>
            <button onClick={gotoListpage}>
              <img
                className={style.reButtonImg}
                src="https://user-images.githubusercontent.com/85507868/160820139-6ec16112-30c2-4ec3-b28e-9c9a95f63a06.png"
                alt="rebutton"
              />
            </button>
          </div>
        </div>
        <div className={style.listFilterNoneSearch}>
          <div>
            <button
              id="0"
              onClick={e => {
                totalLayourHandler();
                layoutVisibleHandler(e);
              }}
            >
              {headCountStr}
            </button>
          </div>
          <div
            className={style.layout1}
            style={{
              visibility: vis1,
            }}
          >
            <LayOutFirst setHeadCountStr={setHeadCountStr} onHidden={setVis1} />
          </div>
          <div>
            <button
              id="1"
              onClick={e => {
                totalLayourHandler();
                layoutVisibleHandler(e);
              }}
            >
              {title}
            </button>
          </div>
          <div
            className={style.layout2}
            style={{
              visibility: vis2,
            }}
          >
            <LayOutSecond setTitle={setTitle} onHidden={setVis2} />
          </div>
          <div>
            <button
              id="2"
              onClick={e => {
                totalLayourHandler();
                layoutVisibleHandler(e);
              }}
            >
              {checkBoxTitle}
            </button>
          </div>
          <div
            className={style.layout3}
            style={{
              visibility: vis3,
            }}
          >
            <LayOutThird
              setCheckBoxTitle={setCheckBoxTitle}
              onHidden={setVis3}
            />
          </div>
        </div>
      </section>

      <center className={style.listSearchbutton}>
        <button>SEARCH →</button>
      </center>

      <section className={style.product}>
        <div className={style.productBorder} />
        <Products />
        <div className={style.productBottomBorder} />
      </section>
    </div>
  );
}

export default List;
