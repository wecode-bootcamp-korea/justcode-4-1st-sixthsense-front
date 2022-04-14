import React, { useState, useEffect } from 'react';
import BASE_URL from '../../../../config';
import style from './TravelList.module.css';

function TravelList() {
  const [contents, setContents] = useState([
    {
      id: 1,
      imageUrl:
        'https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939__340.jpg',
    },
    {
      id: 2,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265__480.jpg',
    },
    {
      id: 3,
      imageUrl:
        'https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060__340.jpg',
    },

    {
      id: 4,
      imageUrl:
        'https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092__340.jpg',
    },
    {
      id: 5,
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/11/23/14/29/living-room-1853203__340.jpg',
    },
    {
      id: 6,
      imageUrl:
        'https://cdn.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_960_720.jpg',
    },
  ]);

  useEffect(() => {
    fetch(`${BASE_URL}/dormitories`, { method: 'GET' })
      .then(res => res.json())
      .then(result => setContents(result.data));
  }, []);

  return (
    <div className={style.travelList}>
      <div className={style.tarvelWrapper}>
        <div className={style.travelText}>TRAVEL</div>
        <div className={style.gridWrapper}>
          {contents.map(con => {
            return (
              <div key={con.id} className={style.contentsWrapper}>
                <img className={style.img} src={con.imageUrl[2]} alt={con.id} />
                <div className={style.textSection}>
                  <p className={style.textTitle} style={{ width: 250 }}>
                    {con.comment}
                  </p>
                  <p className={style.textPlace}>
                    {con.city} · {con.district}
                  </p>
                  <p className={style.readMore}>read more</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TravelList;
