import { useState, useEffect } from 'react';
import SmallModal from '../SmallModal/SmallModal';
import SmallModalFirstLayout from './Child/SubLayoutFirst';
import BlackButton from '../../../../../components/BlackButton/BlackButton';

const peopleObj = { 성인: 0, 아동: 0, 영아: 0 };
let totalpeople = 0;

function LayOutFirst({ setHeadCountStr }) {
  const [people, setPeople] = useState({});

  useEffect(() => {
    Object.assign(peopleObj, people);
  }, [people]);

  function onClickHandler() {
    totalpeople = 0;
    sumPeople();
    stringArray();
  }

  function sumPeople() {
    totalpeople += peopleObj['성인'] + peopleObj['아동'] + peopleObj['영아'];
  }

  function stringArray() {
    if (!totalpeople) {
      setHeadCountStr('인원');
      return;
    }
    setHeadCountStr(
      `성인: ${peopleObj['성인']}, 아동: ${peopleObj['아동']}, 영아: ${peopleObj['영아']}`
    );
  }

  function closeModal(e) {
    const parentStyleVisible =
      e.target.parentElement.parentElement.parentElement.style.visibility;
    let judge = false;
    if (parentStyleVisible === 'visible') {
      judge = true;
    }
    e.target.parentElement.parentElement.parentElement.style.visibility =
      judge && 'hidden';
  }

  return (
    <section>
      <SmallModal title="인원" />
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: 10,
        }}
      >
        {firstLayoutArray.map(data => (
          <SmallModalFirstLayout
            key={firstLayoutArray.indexOf(data)}
            content={data[0]}
            smallContent={data[1]}
            setPeople={setPeople}
          />
        ))}
        <BlackButton
          content="적용하기"
          onClick={e => {
            onClickHandler();
            closeModal(e);
          }}
        />
      </section>
    </section>
  );
}

export default LayOutFirst;

const firstLayoutArray = [
  ['성인', '청소년 포함'],
  ['아동', '24개월~12세'],
  ['영아', '24개월 미만'],
];

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
