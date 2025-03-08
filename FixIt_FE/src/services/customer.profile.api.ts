// Components
import { TAxiosError } from "../types/responses";
import { BASE_URL } from "../../config";
import { CONTROLLERS } from "../utils/enums";

// Third party
import { axiosInstance } from "../hooks/API/token";

const CustomerProfileController = (accessToken: string | null) => {
  const controllerName = CONTROLLERS.CUSTOMER;

  const updateProfile = async <T>(data: {
    name: string;
  }): Promise<T | { success: boolean; error: TAxiosError }> => {
    try {
      const res = await axiosInstance.post<T>(
        `${BASE_URL}/${controllerName}/profile/update`,
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
    updateProfile,
  };
};

export { CustomerProfileController };
