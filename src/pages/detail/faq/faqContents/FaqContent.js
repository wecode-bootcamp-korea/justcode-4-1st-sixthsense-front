import React from 'react';
import style from './FAQContent.module.css';
import classNames from 'classnames/bind';

const FAQContent = ({ compInfo }) => {
  const cx = classNames.bind(style);

  const infoList = compInfo.infoList;

  return (
    <div>
      <div className={cx('nameWrapper')}>
        <span className={cx('name')}>{compInfo.name}</span>
      </div>
      <div className={cx('contentWrapper')}>
        <div className={cx('subHeading')}>{compInfo.subHeading}</div>
        <div className={cx('contents')}>
          <ul>
            <li className={cx('contentList')}>{infoList[0]}</li>
            <li className={cx('contentList')}>{infoList[1]}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQContent;
