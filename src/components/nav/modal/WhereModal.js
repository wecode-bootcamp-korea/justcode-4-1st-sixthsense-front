import React from 'react';
import style from './WhereModal.module.css';

function WhereModal({ modalRef, closeModal }) {
  return (
    <div className={style.modalWrapper} ref={modalRef}>
      <div>
        <div className={style.modal}>
          <div className={style.titleWrapper}>
            <div className={style.modalTitle}>
              <p>어디로떠날까요?</p>
              <button id="modalClose1" onClick={closeModal}>
                닫기
              </button>
            </div>
          </div>
          <input />
          <div className={style.location}>
            <div className={style.locationWrapper}>
              <p className={style.domestic}>국내</p>
              <ul>
                <li>국내전체</li>
                <li>제주</li>
                <li>서울</li>
                <li>강원</li>
                <li>부산</li>
                <li>경기</li>
                <li>충청</li>
                <li>경상</li>
                <li>전라</li>
                <li>인천</li>
                <li>광주</li>
                <li>대전</li>
                <li>대구</li>
                <li>울산</li>
              </ul>
            </div>
            <div className={style.locationWrapper}>
              <p className={style.domestic}>국내</p>
              <ul>
                <li>국내전체</li>
                <li>제주</li>
                <li>서울</li>
                <li>강원</li>
                <li>부산</li>
                <li>경기</li>
                <li>충청</li>
                <li>경상</li>
                <li>전라</li>
                <li>인천</li>
                <li>광주</li>
                <li>대전</li>
                <li>대구</li>
                <li>울산</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhereModal;
