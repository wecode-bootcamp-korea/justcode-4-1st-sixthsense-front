import React from 'react';
import style from './FAQButton.module.css';
import classNames from 'classnames/bind';

const FAQButton = () => {
  const cx = classNames.bind(style);
  //버튼을 누르면 className 추가 및 삭제하는 메소드
  // const activeBtn = () => {
  //   //해당 요소의 className을 확인하고
  //   //className의 infoActive 추가
  // };
  return <p className={cx('info')}>인원 및 금액</p>;
};

export default FAQButton;
