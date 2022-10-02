import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { day: 1, appointment: "" },
  { day: 2, appointment: "" },
  { day: 3, appointment: "" },
  { day: 4, appointment: "" },
  { day: 5, appointment: "" },
  { day: 6, appointment: "" },
  { day: 7, appointment: "" },
];

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    value: initialState,
  },
  reducers: {
    createAppointment: (state, action) => {
      let newState = [...state.value]
      let findElement = newState.findIndex(value => value.day === action.payload.day)
      newState[findElement] = action.payload
      state.value = newState
    },
    cancelAppointment: (state, action) => {
      let newState = [...state.value]
      let findElement = newState.findIndex(value => value.day === action.payload.day)
      newState[findElement] = action.payload
      state.value = newState
    },
    resetAllAppointments: (state) => {
      state.value = initialState;
    },
  },
});

export const {
  createAppointment,
  cancelAppointment,
  resetAllAppointments,
} = calendarSlice.actions;

export default calendarSlice.reducer;
