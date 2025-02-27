// Third party
import axios, { AxiosError } from 'axios';

// Components
import { TAxiosError } from '../types/responses';
import { BASE_URL } from '../../config';
import { CONTROLLERS } from '../utils/enums';

const CustomerProfileController = () => {
  const controllerName = CONTROLLERS.CUSTOMER;

  const updateProfile = async <T>(data: { name: string }): Promise<T | { success: boolean; error: TAxiosError }> => {
    try {
      const res = await axios.post<T>(`${BASE_URL}/${controllerName}/profile/update`, data, { withCredentials: true });

      return res.data;
    } catch (err) {
      console.log('Update customer profile request error', err);
      return {
        success: false,
        error: err as AxiosError & TAxiosError,
      };
    }
  };

  return {
    updateProfile,
  };
};


export { CustomerProfileController };