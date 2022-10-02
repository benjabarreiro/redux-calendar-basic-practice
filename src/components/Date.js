import React from "react";
import { useDispatch } from "react-redux";
import { createAppointment, cancelAppointment } from "../features/calendar";

function Date({ day, appointment }) {
  const dispatch = useDispatch();

  const handleAppointment = () => {
    let action = appointment
      ? cancelAppointment({ day, appointment: "" })
      : createAppointment({ day, appointment: "Prueba" });
    return dispatch(action);
  };
  return (
    <div style={{ backgroundColor: `${appointment ? "red" : "green"}` }}>
      <span>Day: {day}</span>
      <span onClick={handleAppointment}>Appointment: {appointment}</span>
    </div>
  );
}

export default Date;
