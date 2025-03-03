import { useEffect, useState } from "react";

// Components
import { getLocalValue } from "../utils/storage";
import { refreshAccessToken } from "./API/token/authAPI";
import { store } from "../store";
import { authenticateActions } from "../store/authenticate/slice";

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const refreshTokenIfNeeded = async () => {
      const getPhone = () => getLocalValue("phone");

      if (!getPhone()) {
        setIsLoggedIn(false);
        setIsLoading(false);
        return null;
      }

      try {
        const newAccessToken = await refreshAccessToken();
        setIsLoggedIn(!!newAccessToken);
        if (newAccessToken) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }

        if (newAccessToken) {
          store.dispatch(authenticateActions.setAccessToken(newAccessToken));
        }
      } catch (error) {
        console.error("Failed to refresh token:", error);
      } finally {
        setIsLoading(false);
      }
    };

    void refreshTokenIfNeeded();
  }, []);

  return {
    isLoading,
    isLoggedIn,
  };
}
