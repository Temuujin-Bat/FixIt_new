// Third party
import axios from "axios";

// Components
import { refreshAccessToken } from "./authAPI";
import { authenticateActions } from "../../../store/authenticate/slice";
import { store } from "../../../store";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL || "http://localhost:5151/api/customer/auth",
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = store.getState().authReducer.accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    console.warn("No access token found in Redux state!");
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      console.warn("401 Unauthorized detected. Trying to refresh token...");
      originalRequest._retry = true;

      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        store.dispatch(authenticateActions.setAccessToken(newAccessToken));
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } else {
        console.error("Refresh token failed. Logging out user.");
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
