// MUI
import { Typography, Box } from '@mui/material';

// Third party
import { Link } from 'react-router-dom';

const LoginFormLinks = () => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
    <Box
      component={Link}
      to="/register"
      sx={{ display: 'flex', textDecoration: 'none', color: 'primary.main' }}
    >
      <Typography variant="subtitle2" sx={{ textDecoration: 'underline' }}>
        אין לך חשבון
      </Typography>
      <Typography>?</Typography>
      <Typography
        variant="subtitle2"
        sx={{
          mr: '5px',
        }}
      >
        להרשמה
      </Typography>
    </Box>

    <Box
      component={Link}
      to="/reset-password"
      sx={{ textDecoration: 'none' }}
    >
      <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>
        שכחתי סיסמה
      </Typography>
    </Box>
  </Box>
);

export {
  LoginFormLinks,
};
