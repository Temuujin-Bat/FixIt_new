// Components
import { TEvent } from "../../types";

export type IEventsState = {
  currentMonthEvents: TEvent[];
  nextMonthEvents: TEvent[];
};

export type RootState = {
  eventsReducer: IEventsState;
};
