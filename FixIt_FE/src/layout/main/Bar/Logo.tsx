// MUI
import { Box, Typography } from '@mui/material';

// Third party
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Box
      component={Link}
      to="/"
      sx={{
        textDecoration: 'none',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          letterSpacing: 3,
          color: 'black',
        }}
      >
        Fix It
      </Typography>
    </Box>
  );
}
