import React, { useState } from 'react';
import style from './FAQ.module.css';
import classNames from 'classnames/bind';
import FAQButton from '../faqButtons/FAQButton';

const FAQ = () => {
  const cx = classNames.bind(style);

  return (
    <div className={cx('container')}>
      <div className={cx('buttons')}>
        <p className={cx('title')}>FAQ</p>
        <FAQButton />
        <FAQButton />
        <FAQButton />
        <FAQButton />
        <FAQButton />
      </div>
      <div className={cx('contents')}>
        <p>FAQ를 통하여 예약에 관련된 더 자세한 내용들을 찾아보세요.</p>
      </div>
    </div>
  );
};

export default FAQ;
