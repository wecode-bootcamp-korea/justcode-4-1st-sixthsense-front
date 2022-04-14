import React from 'react';
import style from './FAQButton.module.css';
import classNames from 'classnames/bind';

const FAQButton = ({ name, clicked, click, index }) => {
  const cx = classNames.bind(style);

  const clickButton = () => {
    click(index);
  };

  return (
    <p
      className={cx('infoBtn', clicked === index ? 'infoActive' : '')}
      onClick={clickButton}
    >
      {name}
    </p>
  );
};

export default FAQButton;
