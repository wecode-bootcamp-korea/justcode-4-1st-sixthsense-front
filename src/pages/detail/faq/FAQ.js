import React, { useState } from 'react';
import style from './FAQ.module.css';
import classNames from 'classnames/bind';
import FAQButton from './faqButtons/FAQButton';
import ETC from './faqContents/ETC';
import InfoForUsing from './faqContents/InfoForUsing';
import Capacity from './faqContents/Capacity';
import InfoBooking from './faqContents/InfoBooking';
import InfoAmenity from './faqContents/InfoAmenity';

const FAQ = () => {
  const cx = classNames.bind(style);
  // //infoButton 값 관리
  const [clicked, setClicked] = useState(0);

  // //infoButton 관리하는 함수
  const click = num => {
    setClicked(num);
  };
  // components in array
  const [compArray, setCompArray] = useState([
    <Capacity key={0} index={clicked} name="인원 및 금액" />,
    <InfoBooking key={1} index={clicked} name="예약 및 결제" />,
    <InfoForUsing key={2} index={clicked} name="이용 안내" />,
    <InfoAmenity key={3} index={clicked} name="부대시설 안내" />,
    <ETC key={4} index={clicked} name="기타 안내" />,
  ]);

  return (
    <div className={cx('container')}>
      <div className={cx('buttons')}>
        <p className={cx('title')}>FAQ</p>
        <FAQButton
          click={click}
          name="인원 및 금액"
          clicked={clicked}
          index={0}
        />
        <FAQButton
          click={click}
          name="예약 및 결제"
          clicked={clicked}
          index={1}
        />
        <FAQButton click={click} name="이용 안내" clicked={clicked} index={2} />
        <FAQButton
          click={click}
          name="부대시설 안내"
          clicked={clicked}
          index={3}
        />
        <FAQButton click={click} name="기타 안내" clicked={clicked} index={4} />
      </div>
      <div className={cx('contents')}>
        <p>FAQ를 통하여 예약에 관련된 더 자세한 내용들을 찾아보세요.</p>
        {/* 배열에 컴포넌트를 담아 cliked된 값에 따라 컴포넌트를 보여주면 될 것 같은데? */}
        {compArray[clicked]}
      </div>
    </div>
  );
};

export default FAQ;
