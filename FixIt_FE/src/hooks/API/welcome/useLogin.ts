// Third party
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

// Components
import { TLoginReq } from '../../../types/requests';
import { WelcomeController } from '../../../services';
import { TAxiosError, TLoginRes } from '../../../types/responses';
import { useError } from '../../useError';
import { useAppDispatch } from '../../useAppStore';
import { authenticateActions } from '../../../store/authenticate/slice';
import { setLocalValue } from '../../../utils/storage';


export function useLoginAPI() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { handleReqError } = useError();
  const { enqueueSnackbar } = useSnackbar();


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
      if (rsp?.success && 'customer' in rsp) {
        dispatch(authenticateActions.setCustomerInfo(rsp.customer));

        enqueueSnackbar(`Амжилттай нэвтэрлээ!`, {
          variant: 'success',
        });

        setLocalValue('phone', rsp.customer.phone);

        navigate('/');
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
