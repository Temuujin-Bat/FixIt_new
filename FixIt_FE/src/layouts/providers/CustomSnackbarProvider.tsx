import { MaterialDesignContent, SnackbarProvider } from 'notistack';
import { FC, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { BaseSnackbarIcon } from '../../components';

type TCustomSnackbarProvider = {
  children: ReactNode
};

const CustomSnackbarProvider: FC<TCustomSnackbarProvider> = ({ children }) => {
  const isDark = false;

  const StyledMaterialDesignContent = styled(MaterialDesignContent)(({ theme }) => ({
    '&.notistack-MuiContent': {
      fontFamily: '"Public Sans Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      width: '100%',
      paddingX: theme.spacing(1.5),
      margin: theme.spacing(0.25, 0),
      boxShadow: !isDark ? 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px'
        : 'rgba(0, 0, 0, 0.24) -40px 40px 80px -8px',
      borderRadius: '8px',
      color: isDark ? theme.palette.grey[800] : '#FFFFFF',
      backgroundColor: !isDark ? theme.palette.grey[900] : '#FFFFFF',
      fontSize: 16,
    },
    '&.notistack-MuiContent-success': {
      color: 'rgb(16 185 129 / 1) !important',
      backgroundColor: isDark ? '#212B36 !important' : '#FFFFFF !important',
    },
    '&.notistack-MuiContent-warning': {
      color: '#FFC107',
      backgroundColor: isDark ? '#212B36 !important' : '#FFFFFF !important',
    },
    '&.notistack-MuiContent-error': {
      color: 'rgb(239, 68, 68) !important',
      backgroundColor: isDark ? '#212B36 !important' : '#FFFFFF !important',
    },
  }));

  return (
    <SnackbarProvider
      dense
      maxSnack={5}
      autoHideDuration={2000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      iconVariant={{
        success: <BaseSnackbarIcon icon="ix:success" color="success" />,
        error: <BaseSnackbarIcon icon="mdi:information-outline" color="error" />,
        warning: <BaseSnackbarIcon icon="mingcute:alert-line" color="warning" />,
        info: <BaseSnackbarIcon icon="cuida:alert-outline" color="info" />,
      }}
      Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
        warning: StyledMaterialDesignContent,
      }}
    >
      {children}
    </SnackbarProvider>
  );
};

export {
  CustomSnackbarProvider,
};
