import { useState } from 'react';

// MUI
import { Box, Button, Stack, Typography } from '@mui/material';
import { HeartBroken } from '@mui/icons-material';

// Components
import { LoginModal, RegisterModal } from '../welcome/components';

const GuestProfile = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  return (
    <>
      <Box sx={{
        border: '1px solid',
        borderColor: 'secondary.lighter',
        padding: 3,
        borderRadius: 2.5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <HeartBroken fontSize="large" sx={{ mt: 5, mb: 2, color: 'primary.main' }} />

        <Typography textAlign="center" variant="h4">Профайл харахын тулд нэвтэрнэ үү</Typography>
        <Typography mt={.5} textAlign="center" variant="body1" color="secondary.dark">Нэвтрэх эсвэл бүртгүүлсний дараа
          та
          профайлаа
          үзэх
          боломжтой</Typography>

        <Stack spacing={2} width={'100%'} mt={3}>
          <Button onClick={() => setOpenLoginModal(true)} fullWidth variant="contained"
                  sx={{
                    boxShadow: 'none',
                    fontWeight: 'bold',
                    color: 'white',
                    borderRadius: 2.5,
                    padding: 1.5
                  }}>
            НЭВТРЭХ
          </Button>

          <Button onClick={() => setOpenRegisterModal(true)} variant="text" sx={{
            border: '1px solid',
            borderColor: 'secondary.lighter',
            color: 'black',
            fontWeight: 'bold',
            borderRadius: 2.5,
            padding: 1.5,
            textTransform: 'uppercase'
          }}>
            Бүртгүүлэх
          </Button>
        </Stack>
      </Box>

      <LoginModal open={openLoginModal} onClose={() => setOpenLoginModal(false)} />
      <RegisterModal open={openRegisterModal} onClose={() => setOpenRegisterModal(false)} />
    </>
  );
};


export { GuestProfile };