// Third party
import { useSelector } from "react-redux";

// Components
import { RootState } from "./type";

export function getOpenArenasData() {
  const { openArenas, singleOpenArena } = useSelector(
    (state: RootState) => state.arenasReducer
  );

  return { openArenas, singleOpenArena };
}
