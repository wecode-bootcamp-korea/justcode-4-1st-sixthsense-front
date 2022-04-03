import { useState } from 'react';
import { useEffect } from 'react';

import SmallModal from '../SmallModal/SmallModal';
import RangeSlider from './Child/RangeSlider';
import PriceRange from './Child/PriceRange';

let lowPrice = 0;
let upperPrice = 0;

function LayOutSecond() {
  const [leftPercent, setLeftPercent] = useState();
  const [rightPercent, setrightPercent] = useState();
  lowPrice = leftPercent > -1 && Math.floor(leftPercent);
  upperPrice = rightPercent > -1 && Math.floor(rightPercent);
  return (
    <section
      style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}
    >
      <SmallModal title="가격 범위" />
      <RangeSlider
        setLeftPercent={setLeftPercent}
        setrightPercent={setrightPercent}
      />
      <div
        style={{
          marginRight: 0,
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}
      >
        <PriceRange title="최저요금" price={lowPrice} />
        <div style={{ marginRight: 0, padding: 5, paddingTop: 40 }}> - </div>
        <PriceRange title="최고요금" price={upperPrice} />
      </div>
      <button style={styles}>적용하기</button>
    </section>
  );
}

export default LayOutSecond;

const styles = {
  margin: 'auto',
  border: 'none',
  borderRadius: 50,
  paddingTop: 10,
  paddingRight: 53,
  paddingBottom: 10,
  paddingLeft: 53,
  width: 'max-content',
  backgroundColor: 'black',
  color: 'whitesmoke',
};
