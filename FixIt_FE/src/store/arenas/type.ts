import { TArenas } from "../../types";

export type IArenasState = {
  openArenas: TArenas[];
  singleOpenArena: TArenas;
};

export type RootState = {
  arenasReducer: IArenasState;
};
