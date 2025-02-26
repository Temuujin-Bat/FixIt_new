import { forwardRef } from 'react';

// Third party
import { Icon, IconifyIcon } from '@iconify/react';

// MUI
import Box, { BoxProps } from '@mui/material/Box';


interface Props extends BoxProps {
  icon: IconifyIcon | string;
}

const Iconify = forwardRef<SVGElement, Props>(({ icon, width = 20, sx, ...other }, ref) => (
  <Box
    ref={ref}
    component={Icon}
    className="component-iconify"
    icon={icon}
    sx={{ width, height: width, ...sx }}
    {...other}
  />
));

Iconify.displayName = 'Iconify';

export { Iconify };
