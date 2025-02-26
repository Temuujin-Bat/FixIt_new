// Third party
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

// Components
import { TLoginReq } from '../../../types/requests';
import { WelcomeController } from '../../../services';
import { TAxiosError, TLoginRes } from '../../../types/responses';
import { useError } from '../../useError';

export function useLoginAPI() {
  const navigate = useNavigate();
  const { handleReqError } = useError();

  const loginAPI = async (data: TLoginReq) => {
    const payload = {
      phone: data?.phone,
      password: data?.password,
    };

    return await WelcomeController().login<TLoginRes>(payload);
  };

  return useMutation({
    mutationFn: loginAPI,
    onSuccess: async (rsp) => {
      if (rsp && rsp.success) {
        navigate('/');
        console.log('Login successful!', rsp);
      } else if (rsp.error && rsp.error?.response?.status) {
        handleReqError(rsp.error);
      } else if ('msg' in rsp) {
        console.error(`ERROR! resend verification failed! ${rsp.msg}`);
      }
    },
    onError: (error: TAxiosError) => {
      console.error(`ERROR! login request threw an Exception! ${error}`);
    },
  });
}
