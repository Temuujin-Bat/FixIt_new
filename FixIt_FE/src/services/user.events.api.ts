// Hooks
import { useRequest } from "../lib/hooks/index.ts"; // We make here HTTP requests

// Components
import { CONTROLLERS } from "../data/constants.ts";
import { TAxiosError } from "../types/responses";
import { TEditEventReq, TEventsReq } from "../types/requests";

export function UserEventsController() {
  const { axiosRequest, initRequestOptions } = useRequest();

  const controllerName = CONTROLLERS.USER_EVENTS;

  const addEvent = <T>({
    eventData,
  }: {
    eventData: TEventsReq;
  }): Promise<T | { success: boolean; error: TAxiosError }> => {
    const requestOptions = initRequestOptions(
      { eventData },
      { method: "POST" }
    );

    return axiosRequest(`${controllerName}/add_event`, requestOptions);
  };

  const getEvents = <T>(): Promise<
    T | { success: boolean; error: TAxiosError }
  > => {
    const requestOptions = initRequestOptions(null,{ method: "POST" });

    return axiosRequest(`${controllerName}/events`, requestOptions);
  };

  const deleteEvent = <T>(data: {
    eventId: number;
  }): Promise<T | { success: boolean; error: TAxiosError }> => {
    const requestOptions = initRequestOptions(data, { method: "POST" });

    return axiosRequest(`${controllerName}/delete_event`, requestOptions);
  };

  const editEvent = <T>(
    data: TEditEventReq
  ): Promise<T | { success: boolean; error: TAxiosError }> => {
    const requestOptions = initRequestOptions(data, { method: "POST" });

    return axiosRequest(`${controllerName}/update_event`, requestOptions);
  };

  return {
    addEvent,
    getEvents,
    deleteEvent,
    editEvent,
  };
}
