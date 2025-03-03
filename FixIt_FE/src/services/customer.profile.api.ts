// Third party
// Components
import { TAxiosError } from '../types/responses';
import { BASE_URL } from '../../config';
import { CONTROLLERS } from '../utils/enums';
import axiosInstance from '../hooks/API/token/axiosInstance';

const CustomerProfileController = () => {
  const controllerName = CONTROLLERS.CUSTOMER;

  const updateProfile = async <T>(data: {
    name: string;
  }): Promise<T | { success: boolean; error: TAxiosError }> => {
    try {
      const res = await axiosInstance.post<T>(
        `${BASE_URL}/${controllerName}/profile/update`,
        data,
        { withCredentials: true },
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
