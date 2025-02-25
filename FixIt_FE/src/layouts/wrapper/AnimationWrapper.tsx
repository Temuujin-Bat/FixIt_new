import React from "react";

// MUI
import { Fade } from "@mui/material";

// Third party
import { useLocation } from "react-router-dom";

interface AnimationWrapperProps {
  children: React.ReactNode;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ children }) => {
  const location = useLocation();

  return (
    <Fade key={location.pathname} in={true} timeout={{ enter: 500, exit: 500 }}>
      <div>{children}</div>
    </Fade>
  );
};

export default AnimationWrapper;
