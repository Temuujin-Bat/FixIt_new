// SETUP COLORS
const GRAY = {
  lighter: 'rgba(255, 255, 255, 1)', // White
  light: 'rgba(245, 245, 245, 1)', // Light Gray
  main: 'rgba(160, 160, 160, 1)', // Mid Gray
  dark: 'rgba(80, 80, 80, 1)', // Dark Gray
  darker: 'rgba(0, 0, 0, 1)', // Black
};

const PRIMARY = {
  lighter: 'rgba(101, 214, 195, 0.2)', // Lighter Teal
  light: 'rgba(64, 200, 172, 0.6)', // Slightly lighter Teal
  main: 'rgba(26, 188, 156, 1)', // Base Teal
  dark: 'rgba(17, 128, 106, 1)', // Darker Teal
  darker: 'rgba(13, 102, 85, 1)', // Deep Dark Teal
};

const SECONDARY = {
  lighter: 'rgba(224, 224, 224, 1)', // Light Gray
  light: 'rgba(189, 189, 189, 1)', // Soft Gray
  main: 'rgba(158, 158, 158, 1)', // Medium Gray
  dark: 'rgba(97, 97, 97, 1)', // Dark Gray
  darker: 'rgba(66, 66, 66, 1)', // Deep Dark Gray
};


const INFO = {
  lighter: 'rgba(208, 242, 255, 1)', // Lighter Blue
  light: 'rgba(116, 202, 255, 1)', // Bright Blue
  main: 'rgba(24, 144, 255, 1)', // Main Blue
  dark: 'rgba(12, 83, 183, 1)', // Dark Blue
  darker: 'rgba(4, 41, 122, 1)', // Deep Dark Blue
};

const SUCCESS = {
  lighter: 'rgba(233, 252, 212, 1)', // Lighter Green
  light: 'rgba(0, 171, 85, 1)', // Bright Green
  main: 'rgba(16, 185, 129, 1)', // Main Green
  dark: 'rgba(34, 154, 22, 1)', // Dark Green
  darker: 'rgba(8, 102, 13, 1)', // Deep Dark Green
};

const WARNING = {
  lighter: 'rgba(245, 211, 83, 1)', // Lighter Yellow
  light: 'rgba(241, 196, 15, 1)', // Bright Yellow
  main: '#FFC107',
  dark: 'rgba(160, 117, 0, 1)', // Dark Yellow
  darker: 'rgba(120, 85, 0, 1)', // Deep Dark Yellow
};

const ERROR = {
  lighter: 'rgba(255, 231, 217, 1)', // Lighter Red
  light: 'rgba(255, 164, 141, 1)', // Bright Red
  main: 'rgba(255, 72, 66, 1)', // Main Red
  dark: 'rgba(183, 33, 54, 1)', // Dark Red
  darker: 'rgba(122, 12, 46, 1)', // Deep Dark Red
};

const COMMON = {
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  gray: GRAY,
};

const palette = {
  ...COMMON,
  background: { paper: '#fff', default: '#fff' },
};

export default palette;
