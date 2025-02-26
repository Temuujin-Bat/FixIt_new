import { FC } from 'react';

// MUI
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';

// Components
import { Iconify } from '../Iconify';

type TBaseSnackbarIcon = {
  color: string,
  icon: string
};

const BaseSnackbarIcon: FC<TBaseSnackbarIcon> = ({ icon, color }) => {
  const colorIconsMap: { [key: string]: string } = {
    info: '#1890FF',
    success: '#10B981',
    warning: '#FFC107',
    error: '#EF4444',
  };

  return (
    <Box
      component="span"
      sx={{
        mr: 1.5,
        width: 40,
        height: 40,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        color: `${color}.main !important`,
        backgroundColor: `${alpha(colorIconsMap[color], 0.16)} !important`,
      }}
    >
      <Iconify color={colorIconsMap[color]} icon={icon} width={24} height={24} />
    </Box>
  );
};

export {
  BaseSnackbarIcon,
};
