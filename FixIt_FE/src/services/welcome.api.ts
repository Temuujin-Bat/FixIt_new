// Third party
import axios, { AxiosError } from 'axios';

// Components
import { CONTROLLERS } from '../data/constants';
import { TLoginReq } from '../types/requests/welcome.type';
import { TAxiosError } from '../types/responses/common';
import { BASE_URL } from '../../config';

const WelcomeController = () => {
  const controllerName = CONTROLLERS.CUSTOMER;

  const login = async <T>(
    data: TLoginReq
  ): Promise<T | { success: boolean; error: TAxiosError }> => {
    try {
      const res = await axios.post<T>(`${BASE_URL}/${controllerName}/auth/login`, data, { withCredentials: true });

      return res.data;
    } catch (err) {
      console.log('Login request error', err);
      return {
        success: false,
        error: err as AxiosError & TAxiosError,
      };
    }
  };

  return {
    login,
  };
};


export { WelcomeController };