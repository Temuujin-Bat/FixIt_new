// Third party
import { createSlice } from "@reduxjs/toolkit";

// Components
import { reducers } from "./reducers";
import { IArenasState } from "./type";
import { openArenas } from "../../data/arenasData/data";

const initialState: IArenasState = {
  openArenas: openArenas,
  singleOpenArena: {} as IArenasState["singleOpenArena"],
};

const arenasSlice = createSlice({
  name: "arenas",
  initialState,
  reducers,
});

export const { setOpenArenas, setSingleOpenArena } = arenasSlice.actions;
export default arenasSlice.reducer;
