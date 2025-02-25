import { FC } from "react";

// MUI
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

// Components
import ComponentsOverrides from "./overrides";
import { TThemeConfig } from "./type";
import typography from "./typography";
import palette from "./palette";
import customShadows from "./customShadows.ts";
import { ThemeOptions } from "@mui/material/styles/createTheme";
import RTL from "./RightToLeft";

const ThemeConfig: FC<TThemeConfig> = ({ children }) => {
  const themeOptions = {
    palette: {
      ...palette.light,
      mode: "light" as PaletteMode,
    },
    typography,
    customShadows: customShadows(),
    direction: "rtl",
  } as ThemeOptions;

  const theme = createTheme(themeOptions);

  // @ts-ignore
  theme.components = ComponentsOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <RTL themeDirection="rtl">
          <CssBaseline />
          {children}
        </RTL>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeConfig;
