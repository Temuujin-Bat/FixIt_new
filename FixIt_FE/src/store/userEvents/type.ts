// Components
import { TEvent } from "../../types";

export type IEventsState = {
  userEvents: TEvent[];
};

export type RootState = {
  userEventsReducer: IEventsState;
};
