import React from "react";

// Components
import { TBarbershops } from "../../types";

export type IStepActions = {
  activeStep: number;
  next: () => void;
};

export type TBarbershopProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedBarber: React.Dispatch<React.SetStateAction<TBarbershops | null>>;
};
