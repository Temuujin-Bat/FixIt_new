// Third party
import { createSlice } from "@reduxjs/toolkit";

// Components
import { reducers } from "./reducers";
import { IEventsState } from "./type";

const userEventsInitialState: IEventsState = {
  userEvents: [],
};

const userEventsSlice = createSlice({
  name: "userEvents",
  initialState: userEventsInitialState,
  reducers,
});

export const { setUserEvents } = userEventsSlice.actions;
export default userEventsSlice.reducer;
