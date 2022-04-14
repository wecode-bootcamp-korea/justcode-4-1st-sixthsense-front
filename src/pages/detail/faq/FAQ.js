import React, { useEffect, useState } from 'react';
import style from './FAQ.module.css';
import classNames from 'classnames/bind';
import FAQButton from './faqButtons/FAQButton';
import FAQContent from './faqContents/FaqContent';

const FAQ = () => {
  const cx = classNames.bind(style);
  //infoButton 값 관리
  const [clicked, setClicked] = useState(0);

  //infoButton 관리하는 함수
  const click = num => {
    setClicked(num);
  };

  const [compInfo, setCompInfo] = useState([
    {
      id: 1,
      name: '인원 및 금액',
      subHeading: '인원 기준',
      infoList: [
        '숙박 기준인원은 4인, 최대인원은 5인입니다.',
        '기준인원 외 인원추가 요금은 별도 없으며, 싱글 요 세트를 추가로 준비해드립니다.',
      ],
    },
    {
      id: 2,
      name: '예약 및 결제',
      subHeading: '환불 규정',
      infoList: [
        '예약 취소 및 날짜 변경 시 아래의 환뷸 규정에 따른 환불 금액을 드립니다.',
        '예약의 확정은 아래 사항을 모두 숙지하였고 모든 사항에 동의함을 의미합니다.',
      ],
    },
    {
      id: 3,
      name: '이용 안내',
      subHeading: '안내 사항',
      infoList: [
        '체크인 시간은 오후 4시, 체크아웃 시간은 오전 11시입니다. 객실 정리를 위해 체크아웃 시간을 지켜주시길 부탁드립니다.',
        '예약하신 당일 오전에 체크인 안내 문자를 보내드립니다.',
        '체크인/아웃은 리셉션을 통해 가능하며, 리셉션 운영시간은 09:00 - 23:00 입니다.',
        '리셉션 운영시간 외 시설 고장이나 응급상황 발생 시, 리셉션에 기재되어 있는 비상연락처로 연락주시기 바랍니다.',
        '숙소 내 모든 구역에서는 전자 담배를 포함하여 절대 금연입니다. 위반 시 즉각 퇴실 조치와 추가 청소비를 청구합니다.',
      ],
    },
    {
      id: 4,
      name: '부대 시설 안내',
      subHeading: '옥상 루프탑',
      infoList: [
        '옥상 루프탑(6F)이 마련되어 있습니다.',
        '옥상 루프탑은 상시 개방되어 있습니다.',
      ],
    },
    {
      id: 5,
      name: '기타 안내',
      subHeading: '조식',
      infoList: [
        '1층 로비 내 조식이 무료로 제공됩니다.',
        '아메리칸 스타일의 조식으로 셀프로 이용하실 수 있습니다.',
        '운영시간 : 08:00AM - 10:00AM',
      ],
    },
  ]);

  // components in array
  // const [compArray, setCompArray] = useState([]);
  //addArray라는 함수 안에서 compArray값에 컴포넌트 배열을 넣어준다.
  // const addArray = arr => {
  //   setCompArray(...compArray, arr);
  // };
  // //빈 배열을 만들어 반복문을 통해 이 곳에 컴포넌트 배열을 만든다.
  // let tmp = [];

  // //처음 렌더링 될 때 불러온 데이터의 개수에 따라 컴포넌트를 만들고 props값으로 data 배열의 index에 해당하는 data를 넣어준다.
  // useEffect(() => {
  //   for (let i = 0; i < compInfo.length; i++) {
  //     tmp.push(<FAQContent compInfo={compInfo[i]} key={i} />);
  //   }
  //   addArray(tmp);
  // }, []);

  return (
    <div className={cx('container')}>
      <div className={cx('buttons')}>
        <p className={cx('title')}>FAQ</p>
        {compInfo.map((el, idx) => {
          return (
            <FAQButton
              key={el.id}
              click={click}
              name={el.name}
              clicked={clicked}
              index={idx}
            />
          );
        })}
      </div>
      <div className={cx('contents')}>
        <p>FAQ를 통하여 예약에 관련된 더 자세한 내용들을 찾아보세요.</p>
        <FAQContent compInfo={compInfo[clicked]} />
      </div>
    </div>
  );
};

export default FAQ;
