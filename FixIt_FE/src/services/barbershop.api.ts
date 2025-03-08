// Components
import { TAxiosError } from "../types/responses";
import { BASE_URL } from "../../config";
import { CONTROLLERS } from "../utils/enums";
import { axiosInstance } from "../hooks/API/token";

const BarbershopsController = (accessToken: string | null) => {
  const controllerName = CONTROLLERS.CUSTOMER;

  const getAllBarbershops = async <T>(): Promise<
    T | { success: boolean; error: TAxiosError }
  > => {
    try {
      const res = await axiosInstance.post<T>(
        `${BASE_URL}/${controllerName}/appointments/get`,
        {},
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
    getAllBarbershops,
  };
};

export { BarbershopsController };
