import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

import style from './Like.module.css';

function Like() {
  const [isLike, setIsLike] = useState(false);
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
