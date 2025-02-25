import { ReactNode } from "react";
import { Theme } from '@mui/material/styles';

export type TThemeConfig = {
  children: ReactNode;
};

export type TCustomTheme = Theme & {
  customShadows: {
    card: string
    dialog: string
    dropdown: string
    z8: string
    primary: string
    secondary: string
    info: string
    success: string
    error: string
    warning: string
  },
  typography: {
    pxToRem: (val: number) => number
    fontFamily: string
    fontWeightBold: string | number
  },
  palette: { [key: string]: { [key: string]: string } } & {
    grey: { [key: string]: string },
    background: {
      neutral: {
        neutral: string
      }
    },
    success: {
      lighter: string,
      darker: string
    },
    secondary: {
      lighter: string,
      darker: string
    },
    primary: {
      lighter: string,
      darker: string
    },
    info: {
      lighter: string,
      darker: string
    },
    warning: {
      lighter: string,
      darker: string
    }
    error: {
      lighter: string,
      darker: string
    }
    chart: {
      blue: Array<number>
      red: Array<number>
      yellow: Array<number>
      violet: Array<number>
      green: Array<number>
    }
  }
};
