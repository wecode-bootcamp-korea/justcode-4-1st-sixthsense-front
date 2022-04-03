import { useState } from 'react';
import { useEffect } from 'react';

import SmallModal from '../SmallModal/SmallModal';
import RangeSlider from './Child/RangeSlider';
import PriceRange from './Child/PriceRange';

let lowPrice = 0;
let upperPrice = 0;
let symbol = '만원';

function LayOutSecond({ setTitle }) {
  const [leftPercent, setLeftPercent] = useState();
  const [rightPercent, setrightPercent] = useState();
  lowPrice = leftPercent > -1 && Math.floor(leftPercent);
  upperPrice = rightPercent > -1 && Math.floor(rightPercent);

  if (rightPercent === 100) {
    symbol = '만원 ~';
  }
  if (rightPercent < 100) {
    symbol = '만원';
  }

  function toLocalprice(num) {
    return (num * 10000).toLocaleString('ko-KR', {
      style: 'currency',
      currency: 'KRW',
      currencyDisplay: 'symbol',
    });
  }

  function putTitle(e) {
    if (lowPrice === 0 && upperPrice === 100) {
      setTitle('가격범위');
    }

    setTitle(`${toLocalprice(lowPrice)} ~ ${toLocalprice(upperPrice)}`);
  }

  function closeModal(e) {
    const parentStyleVisible =
      e.target.parentElement.parentElement.style.visibility;
    let judge = false;
    if (parentStyleVisible === 'visible') {
      judge = true;
    }
    e.target.parentElement.parentElement.style.visibility = judge && 'hidden';
  }

  return (
    <section
      style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}
    >
      <SmallModal title="가격범위" />
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
        <PriceRange title="최저요금" price={lowPrice} symbol="만원" />
        <div style={{ marginRight: 0, padding: 5, paddingTop: 40 }}> - </div>
        <PriceRange title="최고요금" price={upperPrice} symbol={symbol} />
      </div>
      <button
        style={styles}
        onClick={e => {
          putTitle(e);
          closeModal(e);
        }}
      >
        적용하기
      </button>
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
