import React from 'react';
import style from './InfoForUsing.module.css';
import classNames from 'classnames/bind';

const InfoForUsing = ({ name, index }) => {
  const cx = classNames.bind(style);

  //data를 fetch해서 받아오고 인덱스에 해당하는 값의 정보를 가져오기

  return (
    <div>
      <div className={cx('nameWrapper')}>
        <span className={cx('name')}>{name}</span>
      </div>
      <div className={cx('contentWrapper')}>
        <div className={cx('subHeading')}>예약 전 확인사항</div>
        <div className={cx('contents')}>
          <ul>
            <li className={cx('contentList')}>
              체크인 시간은 오후 4시, 체크아웃 시간은 오전 11시입니다. 객실
              정리를 위해 체크아웃 시간을 지켜주시길 부탁드립니다.
            </li>
            <li className={cx('contentList')}>
              예약하신 당일 오전에, 체크인 안내 문자를 보내드립니다.
            </li>
            <li className={cx('contentList')}>
              숙소 내 모든 구역에서는 전자 담배를 포함하여 절대 금연입니다. 위반
              시 즉각 퇴실 조치와 추가 청소비를 청구합니다.
            </li>
            <li className={cx('contentList')}>
              시설 및 비품의 파손, 반출, 분실 시 변상비가 청구됩니다.
            </li>
            <li className={cx('contentList')}>
              사전에 협의되지 않은 상업 사진 및 영상 촬영(광고용, 제품사진,
              쇼핑몰, SNS마켓 포함), 드론 촬영은 불가합니다.
            </li>
            <li className={cx('contentList')}>
              예약 변경 및 기타 문의사항은 신돌집(0504-0904-2483)으로 연락
              주시기 바랍니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoForUsing;
