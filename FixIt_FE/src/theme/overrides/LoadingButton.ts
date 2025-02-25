import { LoadingButtonProps, loadingButtonClasses } from '@mui/lab/LoadingButton';

// ----------------------------------------------------------------------

export function LoadingButton() {
  return {
    MuiLoadingButton: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: LoadingButtonProps }) => ({
          ...((ownerState.variant as any) === 'soft' && {
            [`& .${loadingButtonClasses.loadingIndicatorStart}`]: {
              left: 10,
            },
            [`& .${loadingButtonClasses.loadingIndicatorEnd}`]: {
              right: 14,
            },
            ...(ownerState.size === 'small' && {
              [`& .${loadingButtonClasses.loadingIndicatorStart}`]: {
                left: 10,
              },
              [`& .${loadingButtonClasses.loadingIndicatorEnd}`]: {
                right: 10,
              },
            }),
          }),
        }),
      },
    },
  };
}
