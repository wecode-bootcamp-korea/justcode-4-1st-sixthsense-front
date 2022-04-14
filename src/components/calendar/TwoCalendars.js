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

  const checkDate = days => {
    if (days.format('YYYY-MM-DD') === checkInDay) {
      return style.checkInDay;
    } else if (days.format('YYYY-MM-DD') === checkOutDay) {
      return style.checkOutDay;
    } else if (
      moment(days.format('YYYY-MM-DD')).isBetween(checkInDay, tempoCheckOutDay)
    ) {
      return style.tempoCheckOutDay;
    } else if (
      moment(days.format('YYYY-MM-DD')).isBetween(checkInDay, checkOutDay)
    ) {
      return style.onDay;
    } else {
      return style.days;
    }
  };

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
              if (
                moment().isAfter(days.format('YYYY-MM-DD')) &&
                moment().format('YYYY-MM-DD') !== days.format('YYYY-MM-DD')
              ) {
                return (
                  <td className={style.lastDays} key={index}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else if (days.format('MM') !== today.format('MM')) {
                return <td key={index} />;
              } else {
                return (
                  <td
                    className={`${checkDate(days)}`}
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
      {Array(2)
        .fill(0)
        .map((el, idx) => {
          return (
            <div className={style.calendar} key={idx}>
              <div className={style.month}>
                {idx === 0
                  ? stateMoment.format('M월')
                  : nextMonth.format('M월')}
              </div>
              <table className={style.calendarTable}>
                <thead className={style.week}>
                  <tr>
                    {['일', '월', '화', '수', '목', '금', '토'].map(
                      (week, idx) => {
                        return (
                          <td className={style.week} key={idx}>
                            {week}
                          </td>
                        );
                      }
                    )}
                  </tr>
                </thead>
                <tbody>
                  {idx === 0
                    ? calendarArr(thisMonth, thisFirstWeek, thisLastWeek)
                    : calendarArr(nextMonth, nextFirstWeek, nextLlastWeek)}
                </tbody>
              </table>
            </div>
          );
        })}
    </div>
  );
}

export default TwoCalendars;
