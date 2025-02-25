import { useEffect } from "react";

// Third party
import { useDispatch } from "react-redux";

// Components
import { setSingleStore, setStores } from "../store/stores/slice";
import { stores } from "../data/storesData/data";
import { getStoresData } from "../store/stores/selectors";

export function useGetStoresAPI() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStores(stores));
  }, [dispatch]);
}

export function useGetSingleStoreAPI(name: string) {
  const dispatch = useDispatch();
  const { stores } = getStoresData();

  useEffect(() => {
    const singleStore = stores.find((store) => store.name === name);

    if (singleStore) {
      dispatch(setSingleStore(singleStore));
    }
  }, [name]);
}
