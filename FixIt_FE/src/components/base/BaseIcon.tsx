import { alpha } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
import { FC } from 'react';
import { Iconify } from '../Iconify';

export interface IColorIconProps extends BoxProps {
  checked?: boolean;
  whiteColor?: boolean;
  colors?: [string, string];
}

const BaseIcon: FC<IColorIconProps> = ({
  checked, whiteColor, colors, sx, ...other
}) => {
  const isDualColor = colors && colors.length === 2;

  const shadow = (
    <Box
      sx={{
        width: 1,
        height: 1,
        opacity: 0.48,
        borderRadius: '50%',
        position: 'absolute',
        boxShadow: '4px 4px 8px 0 currentColor',
      }}
    />
  );

  const icon = (
    <Iconify
      icon="eva:checkmark-fill"
      sx={{
        opacity: 0,
        ...(checked && {
          opacity: 1,
          color: 'common.white',
          ...(whiteColor && {
            color: 'common.black',
          }),
        }),
      }}
    />
  );

  return (
    <Box
      sx={{
        width: 20,
        height: 20,
        display: 'flex',
        borderRadius: '50%',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: isDualColor
          ? undefined
          : 'currentColor', // Use currentColor if not dual color
        background: isDualColor
          ? `linear-gradient(to right, ${colors[0]} 50%, ${colors[1]} 50%)`
          : undefined,
        transition: (theme) => theme.transitions.create('all', {
          duration: theme.transitions.duration.shortest,
        }),
        ...(whiteColor && {
          border: (theme) => `solid 1px ${theme.palette.divider}`,
          boxShadow: (theme) => `4px 4px 8px 0 ${alpha(theme.palette.grey[500], 0.24)}`,
        }),
        ...(checked && {
          transform: 'scale(1.4)',
        }),
        ...sx,
      }}
      {...other}
    >
      {checked && shadow}
      {icon}
    </Box>
  );
};

export { BaseIcon };
