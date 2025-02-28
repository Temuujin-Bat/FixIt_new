// Third party
import { useMutation } from '@tanstack/react-query';

// Components
import { IBaseResponse, TAxiosError } from '../../../types/responses';
import { useError } from '../../useError';
import { CustomerProfileController } from '../../../services';
import { useAppDispatch, useAppSelector } from '../../useAppStore';
import { authenticateActions } from '../../../store/authenticate/slice';
import { useSnackbar } from 'notistack';
import { getCustomerInfo } from '../../../store/authenticate/selectors';


export function useUpdateProfileCustomerAPI() {
  const dispatch = useAppDispatch();
  const { handleReqError } = useError();
  const { enqueueSnackbar } = useSnackbar();
  const selectedCustomer = useAppSelector(getCustomerInfo);

  const updateAPI = async (data: { name: string }) => {
    const payload = {
      name: data.name
    };

    return await CustomerProfileController().updateProfile<IBaseResponse>(payload);
  };

  return useMutation({
    mutationFn: updateAPI,
    onSuccess: async (rsp, variables) => {
      if (rsp && rsp?.success) {
        dispatch(authenticateActions.setCustomerInfo({ ...selectedCustomer, name: variables.name }));

        enqueueSnackbar(`Мэдээллийг амжилттай өөрчиллөө`, {
          variant: 'success',
        });
      } else if (rsp.error && rsp.error?.response?.status) {
        handleReqError(rsp.error);
      } else if ('msg' in rsp) {
        console.error(`ERROR! resend verification failed! ${rsp.msg}`);
      }
    },
    onError: (error: TAxiosError) => {
      console.error(`ERROR! update customer profile request threw an Exception! ${error}`);
    },
  });
}
