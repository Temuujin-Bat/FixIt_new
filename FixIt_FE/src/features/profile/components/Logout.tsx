import { useState } from 'react';

// MUI
import { Box, Typography } from '@mui/material';

// Components
import { LogoutModal } from '../components';


const Logout = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box mt={3}>
      <Typography
        onClick={() => setOpenModal(true)}
        sx={{ textDecoration: 'underline', '&:hover': { cursor: 'pointer' } }}
      >
        Гарах
      </Typography>

      <LogoutModal open={openModal} onClose={() => setOpenModal(false)} />
    </Box>
  );
};

export { Logout };