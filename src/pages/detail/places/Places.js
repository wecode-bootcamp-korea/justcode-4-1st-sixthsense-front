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
        <PlaceList
          id={1}
          key={1}
          placeTitle={places[0]}
          placeCategory={types[0]}
          placeDescription={des[0]}
        />
        <PlaceList
          id={2}
          key={2}
          placeTitle={places[1]}
          placeCategory={types[1]}
          placeDescription={des[1]}
        />
        <PlaceList
          id={3}
          key={3}
          placeTitle={places[2]}
          placeCategory={types[2]}
          placeDescription={des[2]}
        />
      </ul>
    </div>
  );
};

export default Places;
