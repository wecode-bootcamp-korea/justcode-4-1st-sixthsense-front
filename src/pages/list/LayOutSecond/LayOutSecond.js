import SmallModal from '../SmallModal/SmallModal';
import RangeSlider from './Child/RangeSlider';

function LayOutSecond() {
  return (
    <section>
      <SmallModal title="가격 범위" />
      <RangeSlider />
    </section>
  );
}

export default LayOutSecond;
