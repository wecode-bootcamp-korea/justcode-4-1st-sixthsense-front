import { useState } from 'react';
import SmallModal from '../SmallModal/SmallModal';
import RangeSlider from './Child/RangeSlider';
import PriceRange from './Child/PriceRange';
import BlackButton from '../../../../../components/BlackButton/BlackButton';

function LayOutSecond({ setTitle }) {
  const [leftPercent, setLeftPercent] = useState(0);
  const [rightPercent, setrightPercent] = useState(50);
  const lowPrice = leftPercent > -1 && Math.floor(leftPercent);
  const upperPrice = rightPercent > -1 && Math.floor(rightPercent);
  let symbol = '만원';

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
      return;
    }
    if (upperPrice === 100) {
      setTitle(`${toLocalprice(lowPrice)} ~`);
      return;
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

      <BlackButton
        content="적용하기"
        onClick={e => {
          putTitle(e);
          closeModal(e);
        }}
      />
    </section>
  );
}

export default LayOutSecond;
