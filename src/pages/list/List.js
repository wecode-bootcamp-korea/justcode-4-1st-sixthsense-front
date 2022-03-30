import React from 'react';
import style from '../list/List.module.css';

function List() {
  return (
    <div>
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

            <section className={style.modalOverlay}>
              <div className="modalWindow">
                <div className="title">
                  <h2>어디로 떠날까요?</h2>
                </div>
                <div className="xButton">X</div>
                <div>
                  <div className="componet">
                    <h3>국내</h3>
                    <div>map으로 받기</div>
                  </div>
                  <div className="componet">
                    <h3>해외</h3>
                    <div>map으로</div>
                  </div>
                </div>
              </div>
            </section>

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
            <button>인원</button>
          </div>
          <div>
            <button>가격 범위</button>
          </div>
          <div>
            <button>스테이 유형</button>
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
