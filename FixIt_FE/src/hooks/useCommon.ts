import { useQueryClient } from "@tanstack/react-query";
import {useLocation, useNavigate} from "react-router-dom";
import { persistor } from "../store";
import { TOKEN_KEY } from "../data/constants";
import {useMemo} from "react";

export function useCommon() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await persistor.purge();
    queryClient.removeQueries();
    sessionStorage.removeItem(TOKEN_KEY);
    localStorage.clear();
    navigate("/");
  };

  return {
    handleLogout,
  };
}


export function useQueryParams() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}
