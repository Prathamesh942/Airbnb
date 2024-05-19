import React, { useState } from "react";

function getMonthName(monthNumber) {
  const date = new Date(2000, monthNumber - 1, 1);
  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );

  return monthName;
}

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

function getDayNumberFromDate(year, month, day) {
  const date = new Date(year, month - 1, day);
  const dayOfWeekNumber = date.getDay();
  return dayOfWeekNumber;
}

const DisplayWeek = ({ date, day, days, cin = 20, cout = 26 }) => {
  let row = [];

  if (day !== 0) {
    for (let i = 0; i < day; i++) {
      row.push(<td key={`empty-cell-${i}`}></td>);
    }
  }

  for (let i = day; i < 7; i++) {
    if (date <= days) {
      row.push(
        <td
          key={`day-cell-${date}`}
          className={`${
            cin == date || cout == date ? " bg-zinc-800 text-white" : ""
          } rounded-full min-w-10 min-h-10 h-10 w-10 text-center`}
        >
          {" "}
          {date}
        </td>
      );
    } else {
      row.push(<td key={`empty-cell-${i}`}></td>);
    }
    date++;
  }

  return <tr className=" gap-10">{row}</tr>;
};

const DisplayMonth = ({ year, month }) => {
  let days = getLastDayOfMonth(year, month - 1);
  let calendar = [];
  let dt = 1;
  let dy = getDayNumberFromDate(year, month, dt);

  calendar.push(
    <tr className="text-xs">
      <th className=" font-medium text-gray-700">Sun</th>
      <th className=" font-medium text-gray-700">Mon</th>
      <th className=" font-medium text-gray-700">Tue</th>
      <th className=" font-medium text-gray-700">Wed</th>
      <th className=" font-medium text-gray-700">Thu</th>
      <th className=" font-medium text-gray-700">Fri</th>
      <th className=" font-medium text-gray-700">Sat</th>
    </tr>
  );

  for (let i = 0; i < 5; i++) {
    calendar.push(<DisplayWeek date={dt} day={dy} days={days} />);
    dt += 7 - dy;
    dy = 0;
  }
  if (dt <= days) {
    calendar.push(<DisplayWeek date={dt} day={dy} days={days} />);
  }

  return (
    <div className="">
      <tbody className=""> {calendar}</tbody>
    </div>
  );
};

function Calendar() {
  const currentDate = new Date();
  const [month, setMonth] = useState(currentDate.getMonth() + 1);
  const [year, setYear] = useState(currentDate.getFullYear());
  return (
    <div className="w-[90%] flex justify-between gap-12 my-6 max-md:hidden">
      <table className="border-collapse separate border-spacing-20">
        <div className="flex justify-between pr-[50%] my-6">
          <button
            className="relative"
            onClick={() => {
              if (month == 1) {
                setMonth(12);
                setYear(year - 1);
              } else {
                setMonth(month - 1);
              }
            }}
          >
            &lt;
          </button>
          <span className=" text-center font-medium translate-x-[50%]">
            {getMonthName(month)} {year}
          </span>
        </div>
        <DisplayMonth year={year} month={month} />
      </table>
      <table className="w-[100%] flex flex-col">
        <div className="flex justify-between pl-[50%] my-6">
          <span className=" text-center translate-x-[-50%] font-medium">
            {month == 12
              ? `${getMonthName(month + 1)} ${year + 1}`
              : `${getMonthName(month + 1)} ${year}`}
          </span>
          <button
            className="relative"
            onClick={() => {
              if (month == 12) {
                setMonth(1);
                setYear(year + 1);
              } else {
                setMonth(month + 1);
              }
            }}
          >
            &gt;
          </button>
        </div>
        <DisplayMonth year={year} month={month + 1} />
      </table>
    </div>
  );
}

export default Calendar;
