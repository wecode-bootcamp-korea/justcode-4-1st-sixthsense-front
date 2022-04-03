import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import LayOutFirst from './Filter/LayOutFirst/LayOutFirst';
import LayOutSecond from './Filter//LayOutSecond/LayOutSecond';
import LayOutThird from './Filter//LayOutThird/LayOutThird';

import style from '../list/List.module.css';

let totalpeople = 0;
let firstword = '';
let secondword = '';
let lastword = '';

function List() {
  const [vis1, setVis1] = useState('hidden');
  const [vis2, setvis2] = useState('hidden');
  const [vis3, setVis3] = useState('hidden');
  const [headCountArr, setHeadCountArr] = useState(['인원']);
  const [headCountStr, setHeadCountStr] = useState('');
  const [title, setTitle] = useState('가격범위');
  const [checkBoxTitle, setCheckBoxTitle] = useState('스테이 유형');

  const layoutVisibleHandler = e => {
    const index = Number(e.target.id);
    const arr = [
      [vis1, setVis1],
      [vis2, setvis2],
      [vis3, setVis3],
    ];
    arr[index][0] === 'hidden'
      ? arr[index][1]('visible')
      : arr[index][1]('hidden');
  };

  const totalLayourHandler = () => {
    setVis1('hidden');
    setvis2('hidden');
    setVis3('hidden');
  };

  //총 인원 수 세어주기
  // 그 값들 백으로 넘길 수 있도록 하기

  function sumPeople() {
    headCountArr.forEach(data => {
      totalpeople += data[1];
    });
  }

  function stringArray() {
    let tempStirng = '인원';
    if (!totalpeople) {
      firstword = '인원';
      setHeadCountStr(tempStirng);
      return;
    }
    if (headCountArr[0] === '인원') {
      firstword = '인원';
    }
    headCountArr.forEach(data => {
      if (data[0] === '성인') {
        firstword = `성인: ${data[1]}`;
      }

      if (data[0] === '아동') {
        secondword = `아동: ${data[1]}`;
      }

      if (data[0] === '영아') {
        lastword = `영아: ${data[1]}`;
      }
    });
    let stringarr = [firstword, secondword, lastword];

    stringarr.forEach(data => {
      if (data) {
        tempStirng += `${data} `;
      }
    });

    let resultString = tempStirng.slice(2);
    setHeadCountStr(resultString);
  }

  useEffect(() => {
    totalpeople = 0;
    sumPeople();
    stringArray();
  });

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
              <input type="search" />
              <button>국내전체</button>
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
            <button>
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
            <LayOutFirst setHeadCountArr={setHeadCountArr} />
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
            <LayOutSecond setTitle={setTitle} />
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
              checkBoxTitle={checkBoxTitle}
              setCheckBoxTitle={setCheckBoxTitle}
            />
          </div>
        </div>
      </section>

      <center className={style.listSearchbutton}>
        <button>SEARCH →</button>
      </center>
    </div>
  );
}

export default List;
