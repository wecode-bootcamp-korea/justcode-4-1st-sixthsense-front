import React, { useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

import style from './Like.module.css';

function Like() {
  const [isLike, setIsLike] = useState(false);
  const [likeTable, setLikeTable] = useState(null);
  useEffect(() => {
    let token = sessionStorage.getItem('login-token') || '';
    fetch('http://localhost:8000/users/heart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(res => setLikeTable(res));
  }, []);

  return (
    <div>
      {isLike ? (
        <FiHeart
          size="20"
          color="lightgray"
          onClick={() => setIsLike(prev => !prev)}
          className={style.heart}
        />
      ) : (
        <FaHeart
          size="20"
          color="pink"
          onClick={() => setIsLike(prev => !prev)}
          className={style.heart}
        />
      )}
    </div>
  );
}

export default Like;
