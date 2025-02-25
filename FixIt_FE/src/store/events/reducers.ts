// Third party
import { PayloadAction } from "@reduxjs/toolkit";

// Components
import { IEventsState } from "./type";

const reducers = {
  setCurrentMonthEvents: (
    state: IEventsState,
    action: PayloadAction<IEventsState["currentMonthEvents"]>
  ) => ({
    ...state,
    currentMonthEvents: action.payload,
  }),
  setNextMonthEvents: (
    state: IEventsState,
    action: PayloadAction<IEventsState["nextMonthEvents"]>
  ) => ({
    ...state,
    nextMonthEvents: action.payload,
  }),
  updateEvent: (
    state: IEventsState,
    action: PayloadAction<{
      month: "CURRENT_MONTH_EVENTS" | "NEXT_MONTH_EVENTS";
      updatedEvent: { eventId: number; [key: string]: any };
    }>
  ) => {
    const { month, updatedEvent } = action.payload;
    const targetKey =
      month === "CURRENT_MONTH_EVENTS"
        ? "currentMonthEvents"
        : "nextMonthEvents";

    return {
      ...state,
      [targetKey]: state[targetKey].map((event) =>
        event.eventId === updatedEvent.eventId
          ? { ...event, ...updatedEvent }
          : event
      ),
    };
  },
  deleteEvent: (
    state: IEventsState,
    action: PayloadAction<{
      month: "CURRENT_MONTH_EVENTS" | "NEXT_MONTH_EVENTS";
      eventId: number;
    }>
  ) => {
    const { month, eventId } = action.payload;
    const targetKey =
      month === "CURRENT_MONTH_EVENTS"
        ? "currentMonthEvents"
        : "nextMonthEvents";

    return {
      ...state,
      [targetKey]: state[targetKey].filter(
        (event) => event.eventId !== eventId
      ),
    };
  },
};

export { reducers };
