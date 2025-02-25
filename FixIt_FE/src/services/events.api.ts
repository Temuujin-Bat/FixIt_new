// Hooks
import { useRequest } from "../lib/hooks"; // We make here HTTP requests

// Components
import { CONTROLLERS } from "../data/constants";
import { TAxiosError } from "../types/responses";
import { TEnrollEventReq } from "../types/requests";

export function EventsController() {
  const { axiosRequest, initRequestOptions } = useRequest();

  const controllerName = CONTROLLERS.EVENTS;

  const currentMonthEvents = <T>(): Promise<
    T | { success: boolean; error: TAxiosError }
  > => {
    const requestOptions = initRequestOptions(null, { method: "POST" });

    return axiosRequest(`${controllerName}/current_month`, requestOptions);
  };

  const nextMonthEvents = <T>(): Promise<
    T | { success: boolean; error: TAxiosError }
  > => {
    const requestOptions = initRequestOptions(null, { method: "POST" });

    return axiosRequest(`${controllerName}/next_month`, requestOptions);
  };

  const enrollEvent = <T>(
    data: TEnrollEventReq
  ): Promise<T | { success: boolean; error: TAxiosError }> => {
    const requestOptions = initRequestOptions(data, { method: "POST" });

    return axiosRequest(`${controllerName}/enroll`, requestOptions);
  };

  return {
    currentMonthEvents,
    nextMonthEvents,
    enrollEvent,
  };
}
