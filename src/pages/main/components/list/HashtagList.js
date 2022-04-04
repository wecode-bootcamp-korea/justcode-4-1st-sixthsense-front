import React from 'react';
import style from './HashtagList.module.css';

function HashtagList() {
  const contents = [
    {
      id: 1,
      url: 'https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939__340.jpg',
    },
    {
      id: 2,
      url: 'https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265__480.jpg',
    },
    {
      id: 3,
      url: 'https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060__340.jpg',
    },

    {
      id: 4,
      url: 'https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092__340.jpg',
    },
    {
      id: 5,
      url: 'https://cdn.pixabay.com/photo/2016/11/23/14/29/living-room-1853203__340.jpg',
    },
    {
      id: 6,
      url: 'https://cdn.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_960_720.jpg',
    },
  ];
  return (
    <div className={style.hastagList}>
      <div>
        <div className={style.hashtagTopic}>머무르며 즐기는 다채로운 경험</div>
        <ul className={style.gridWrapper}>
          {contents.map(con => {
            return (
              <li className={style.contentsWrapper} key={con.id}>
                <img className={style.img} src={con.url} alt={con.id} />
                <p className={style.hashtagText}>#{con.id}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <div className={style.hashtagTopic}>머무르며 즐기는 다채로운 경험</div>
        <ul className={style.gridWrapper}>
          {contents.map(con => {
            return (
              <li className={style.contentsWrapper} key={con.id}>
                <img className={style.img} src={con.url} alt={con.id} />
                <p className={style.hashtagText}>#{con.id}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default HashtagList;
