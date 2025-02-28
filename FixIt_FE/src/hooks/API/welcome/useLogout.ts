// Third party
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

// Components
import { WelcomeController } from '../../../services';
import { IBaseResponse, TAxiosError } from '../../../types/responses';
import { useError } from '../../useError';
import { persist } from '../../../store';

export function useLogoutAPI() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { handleReqError } = useError();


  const loginAPI = async () => {
    return await WelcomeController().logout<IBaseResponse>();
  };

  return useMutation({
    mutationFn: loginAPI,
    onSuccess: async (rsp) => {
      if (rsp?.success && 'customer' in rsp) {
        localStorage.clear();
        await persist.purge();
        queryClient.removeQueries();
        navigate('/');
      } else if (rsp.error && rsp.error?.response?.status) {
        handleReqError(rsp.error);
      } else if ('msg' in rsp) {
        console.error(`ERROR! resend verification failed! ${rsp.msg}`);
      }
    },
    onError: (error: TAxiosError) => {
      console.error(`ERROR! logout request threw an Exception! ${error}`);
    },
  });
}
