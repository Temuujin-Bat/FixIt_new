// MUI
import { Stack } from '@mui/material';

const LoginImg = () => (
  <Stack sx={{ height: '100%' }}>
    <Stack
      component="img"
      loading="lazy"
      decoding="async"
      src="/assets/Welcome/welcomeLogo.png"
      sx={{ height: '100%', objectFit: 'cover' }}
    />
  </Stack>
);

export {
  LoginImg,
};
