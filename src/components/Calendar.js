import React from "react";
import { useSelector } from "react-redux";
import Date from "./Date";

export const Calendar = () => {
  const calendar = useSelector((state) => state.calendar.value);
  return (
    <div>
      {calendar.map((date) => (
        <Date {...date} key={date.day} />
      ))}
    </div>
  );
};
