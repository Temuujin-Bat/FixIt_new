// Components
import { TAxiosError } from "../types/responses";
import { BASE_URL } from "../../config";
import { CONTROLLERS } from "../utils/enums";

// Third party
import { axiosInstance } from "../hooks/API/token";

const CustomerAppointmentsController = (accessToken: string | null) => {
  const controllerName = CONTROLLERS.CUSTOMER;

  const getUserAppointments = async <T>(data: {
    phone: string;
  }): Promise<T | { success: boolean; error: TAxiosError }> => {
    try {
      const res = await axiosInstance.post<T>(
        `${BASE_URL}/${controllerName}/appointments/get`,
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        },
      );

      return res.data;
    } catch (err) {
      throw err;
    }
  };

  return {
    getUserAppointments,
  };
};

export { CustomerAppointmentsController };
