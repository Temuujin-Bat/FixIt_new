import { m, MotionProps } from 'framer-motion';

import Box, { BoxProps } from '@mui/material/Box';

import { FC } from 'react';
import { varContainer } from './container';

type IProps = BoxProps & MotionProps;

export interface IMotionContainer extends IProps {
  animate?: boolean;
  action?: boolean;
}

const MotionContainer: FC<IMotionContainer> = ({
  animate, action = false, children, ...other
}) => {
  if (action) {
    return (
      <Box
        component={m.div}
        initial={false}
        animate={animate ? 'animate' : 'exit'}
        variants={varContainer()}
        {...other}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box
      component={m.div}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
};

export {
  MotionContainer,
};
