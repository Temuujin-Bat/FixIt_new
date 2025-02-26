import { FC } from 'react';

// MUI
import { createTheme, CssBaseline, PaletteMode, StyledEngineProvider, ThemeProvider, } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles/createTheme';

// Components
import { TThemeConfig } from './type';
import typography from './typography';
import palette from './palette';
import ComponentsOverrides from './overrides';

const ThemeConfig: FC<TThemeConfig> = ({ children }) => {
  const themeOptions = {
    palette: {
      ...palette,
      mode: 'light' as PaletteMode,
    },
    typography,
  } as ThemeOptions;

  const theme = createTheme(themeOptions);

  theme.components = ComponentsOverrides();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeConfig;
