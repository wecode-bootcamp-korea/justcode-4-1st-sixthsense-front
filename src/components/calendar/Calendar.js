import React, { useState } from 'react';
import moment from 'moment';

function Calendar() {
  const [stateMoment, setStateMoment] = useState(moment());
  const today = stateMoment;

  const firstWeek = today.clone().startOf('month').week();
  const lastWeek =
    today.clone().endOf('month').week() === 1
      ? 53
      : today.clone().endOf('month').week();

  const prev = () => {
    setStateMoment(stateMoment.clone().subtract(1, 'month'));
  };
  const next = () => {
    setStateMoment(stateMoment.clone().add(1, 'month'));
  };

  const calendarArr = () => {
    let result = [];
    let week = firstWeek;
    for (let i = week; i <= lastWeek; i++) {
      result = result.concat(
        <tr key={i}>
          {Array(7)
            .fill(0)
            .map((data, index) => {
              let days = today
                .clone()
                .startOf('year')
                .week(i)
                .startOf('week')
                .add(index, 'day');

              if (
                moment().format('YYYYMMDD') === days.format('YYYYMMDD') &&
                days.format('MM') === today.format('MM')
              ) {
                return (
                  <td
                    key={index}
                    style={{ backgroundColor: 'red', padding: '10px' }}
                  >
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else if (days.format('MM') !== today.format('MM')) {
                return (
                  <td
                    key={index}
                    style={{
                      backgroundColor: 'white',
                      color: 'white',
                      padding: '10px',
                    }}
                  >
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else {
                return (
                  <td key={index} style={{ padding: '10px' }}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              }
            })}
        </tr>
      );
    }
    return result;
  };

  return (
    <div>
      <button onClick={prev}>prev</button>
      <button onClick={next}>next</button>
      <div>{stateMoment.format('MMMM YYYY')}</div>
      <table>
        <thead>
          <tr>
            <td>일</td>
            <td>월</td>
            <td>화</td>
            <td>수</td>
            <td>목</td>
            <td>금</td>
            <td>토</td>
          </tr>
        </thead>
        <tbody>{calendarArr()}</tbody>
      </table>
    </div>
  );
}

export default Calendar;
