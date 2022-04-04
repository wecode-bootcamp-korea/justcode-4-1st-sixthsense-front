import React from 'react';
import style from './ETC.module.css';
import classNames from 'classnames/bind';

const ETC = ({ name, index }) => {
  const cx = classNames.bind(style);
  return (
    <div>
      <div className={cx('nameWrapper')}>
        <span className={cx('name')}>{name}</span>
      </div>
      <div className={cx('contentWrapper')}>
        <div className={cx('subHeading')}>요가 클래스</div>
        <div className={cx('contents')}>
          <ul>
            <li className={cx('contentList')}>
              온 몸으로 아침 햇살을 느끼고, 귀로는 자연 소리를 들으며 함께
              수련하는 시간은 어디서도 경험해보지 못할 특별한 경험이 될거에요.
              신돌집과 함께 행복한 에너지를 듬뿍 받아가세요.
            </li>
            <li className={cx('contentList')}>
              사전 신청 시 전문 강사의 프라이빗 요가 클래스를 진행합니다.
            </li>
            <li className={cx('contentList')}>
              숙박 인원에 한하여 8세 이상부터 참여 가능합니다.
            </li>
            <li className={cx('contentList')}>
              오전 8~9시에 야외 데크 요가 존에서 진행합니다.
            </li>
            <li className={cx('contentList')}>
              체크인 전에 문자로 입금 요청을 드립니다. 입금이 확인되면 클래스가
              확정됩니다.
            </li>
            <li className={cx('contentList')}>
              우천 시 취소될 수 있습니다. 단순 변심으로 인한 환불은 불가합니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ETC;
