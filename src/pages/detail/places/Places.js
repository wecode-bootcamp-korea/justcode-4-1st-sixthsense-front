import React, { useState } from 'react';
import PlaceList from './PlaceList';
import style from './Places.module.css';

const Places = ({ detail }) => {
  const places = detail.recommendPlacesName;
  const types = detail.recommendPlacesType;
  const des = detail.recommendPlacesDes;

  return (
    <div className={style.placesWrapper}>
      <ul className={style.placesList}>
        {places.map((place, idx) => {
          return (
            <PlaceList
              key={idx}
              id={idx + 1}
              placeTitle={places[idx]}
              placeCategory={types[idx]}
              placeDescription={des[idx]}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Places;
