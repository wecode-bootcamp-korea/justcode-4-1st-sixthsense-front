import React from 'react';
import moment from 'moment';
import style from './TwoCalendars.module.css';

function TwoCalendars({
  stateMoment,
  checkIn,
  checkOut,
  onCheck,
  tempoCheckOut,
  onHover,
  onHoverReset,
}) {
  const thisMonth = stateMoment;
  const thisFirstWeek = thisMonth.clone().startOf('month').week();
  const thisLastWeek =
    thisMonth.clone().endOf('month').week() === 1
      ? 53
      : thisMonth.clone().endOf('month').week();

  const nextMonth = stateMoment.clone().add(1, 'month');
  const nextFirstWeek = nextMonth.clone().startOf('month').week();
  const nextLlastWeek =
    nextMonth.clone().endOf('month').week() === 1
      ? 53
      : nextMonth.clone().endOf('month').week();

  const checkInDay = checkIn;
  const checkOutDay = checkOut;
  const tempoCheckOutDay = tempoCheckOut;

  const calendarArr = (today, firstWeek, lastWeek) => {
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
              } else if (days.format('YYYY-MM-DD') === checkInDay) {
                return (
                  <td
                    className={style.checkInDay}
                    onMouseEnter={() => onHover(days.format('YYYY-MM-DD'))}
                    onMouseLeave={onHoverReset}
                    onClick={() => onCheck(days.format('YYYY-MM-DD'))}
                    key={index}
                  >
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else if (
                moment(days.format('YYYY-MM-DD')).isBetween(
                  checkInDay,
                  tempoCheckOutDay
                )
              ) {
                return (
                  <td
                    className={style.tempoCheckOutDay}
                    onMouseEnter={() => onHover(days.format('YYYY-MM-DD'))}
                    onMouseLeave={onHoverReset}
                    onClick={() => onCheck(days.format('YYYY-MM-DD'))}
                    key={index}
                  >
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else if (days.format('YYYY-MM-DD') === checkOutDay) {
                return (
                  <td
                    className={style.checkOutDay}
                    onMouseEnter={() => onHover(days.format('YYYY-MM-DD'))}
                    onMouseLeave={onHoverReset}
                    onClick={() => onCheck(days.format('YYYY-MM-DD'))}
                    key={index}
                  >
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else if (
                moment(days.format('YYYY-MM-DD')).isBetween(
                  checkInDay,
                  checkOutDay
                )
              ) {
                return (
                  <td
                    className={style.onDay}
                    onMouseEnter={() => onHover(days.format('YYYY-MM-DD'))}
                    onMouseLeave={onHoverReset}
                    onClick={() => onCheck(days.format('YYYY-MM-DD'))}
                    key={index}
                  >
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else if (
                moment().isAfter(days.format('YYYY-MM-DD')) &&
                moment().format('YYYY-MM-DD') !== days.format('YYYY-MM-DD')
              ) {
                return (
                  <td className={style.lastDays} key={index}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else {
                return (
                  <td
                    className={style.days}
                    onMouseEnter={() => onHover(days.format('YYYY-MM-DD'))}
                    onMouseLeave={onHoverReset}
                    onClick={() => onCheck(days.format('YYYY-MM-DD'))}
                    key={index}
                  >
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
    <div className={style.calendarWrapper}>
      <div className={style.calendar}>
        <div className={style.month}>{stateMoment.format('M월')}</div>
        <table className={style.calendarTable}>
          <thead>
            <tr className={style.week}>
              <td>일</td>
              <td>월</td>
              <td>화</td>
              <td>수</td>
              <td>목</td>
              <td>금</td>
              <td>토</td>
            </tr>
          </thead>
          <tbody>{calendarArr(thisMonth, thisFirstWeek, thisLastWeek)}</tbody>
        </table>
      </div>
      <div className={style.calendar}>
        <div className={style.month}>{nextMonth.format('M월')}</div>
        <table className={style.calendarTable}>
          <thead>
            <tr className={style.week}>
              <td>일</td>
              <td>월</td>
              <td>화</td>
              <td>수</td>
              <td>목</td>
              <td>금</td>
              <td>토</td>
            </tr>
          </thead>
          <tbody>{calendarArr(nextMonth, nextFirstWeek, nextLlastWeek)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default TwoCalendars;
