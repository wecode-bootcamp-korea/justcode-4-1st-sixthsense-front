import React from 'react';

function Calendar({ stateMoment }) {
  const today = stateMoment;

  const firstWeek = today.clone().startOf('month').week();
  const lastWeek =
    today.clone().endOf('month').week() === 1
      ? 53
      : today.clone().endOf('month').week();

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
              if (days.format('MM') !== today.format('MM')) {
                return <td />;
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
