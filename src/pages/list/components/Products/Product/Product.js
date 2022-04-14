import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import BASE_URL from '../../../../../config';

import style from './Product.module.css';

function Product({
  id,
  name,
  category,
  islike,
  city,
  district,
  people,
  price,
  image,
}) {
  const navigate = useNavigate();
  const [isLike, setIsLike] = useState(islike);

  function goToDetail() {
    navigate('/detail');
  }

  const changeHeartData = id => {
    let token = sessionStorage.getItem('login-token') || '';
    fetch(`${BASE_URL}/users/heart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        dormId: id,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  return (
    <section className={style.wapper}>
      <div className={style.name}>{name}</div>
      <div className={style.category}>{category}</div>
      <div className={style.content}>
        <div className={style.smallcontent}>
          <div>
            {city}/{district}
          </div>
          <div>기준 {people}명</div>
          <div>
            {price.toLocaleString('ko-KR', {
              style: 'currency',
              currency: 'KRW',
              currencyDisplay: 'symbol',
            })}{' '}
            ~
          </div>
          <div className={style.reservation} onClick={goToDetail}>
            예약하기
          </div>
        </div>
        <div className={style.image}>
          <img src={image} alt="숙소이미지" onClick={goToDetail} />
          {!isLike ? (
            <FiHeart
              size="20"
              color="lightgray"
              onClick={() => {
                setIsLike(prev => !prev);
                changeHeartData(id);
              }}
              className={style.heart}
            />
          ) : (
            <FaHeart
              size="20"
              color="pink"
              onClick={() => {
                setIsLike(prev => !prev);
                changeHeartData(id);
              }}
              className={style.heart}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Product;
