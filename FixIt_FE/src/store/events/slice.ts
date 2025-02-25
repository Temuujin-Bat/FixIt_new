// Third party
import { createSlice } from "@reduxjs/toolkit";

// Components
import { reducers } from "./reducers";
import { IEventsState } from "./type";

const initialState: IEventsState = {
  currentMonthEvents: [],
  nextMonthEvents: [],
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers,
});

export const {
  setCurrentMonthEvents,
  setNextMonthEvents,
  updateEvent,
  deleteEvent,
} = eventsSlice.actions;
export default eventsSlice.reducer;
