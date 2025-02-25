import { useEffect } from "react";

// Third party
import { useDispatch } from "react-redux";

// Components
import { setOpenArenas, setSingleOpenArena } from "../store/arenas/slice";
import { openArenas } from "../data/arenasData/data";
import { getOpenArenasData } from "../store/arenas/selectors";

export function useGetOpenArenasAPI() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOpenArenas(openArenas));
  }, [dispatch]);
}

export function useGetSingleOpenArenaAPI(name: string) {
  const dispatch = useDispatch();
  const { openArenas } = getOpenArenasData();

  useEffect(() => {
    const singleOpenArena = openArenas.find((arena) => arena.name === name);

    if (singleOpenArena) {
      dispatch(setSingleOpenArena(singleOpenArena));
    }
  }, [name]);
}
