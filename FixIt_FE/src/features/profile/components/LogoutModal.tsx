// MUI
import { Box, Button, IconButton, Modal, Stack, Typography } from '@mui/material';
import { Close, Warning } from '@mui/icons-material';

// Components
import { TModal } from '../type';

// Hooks
import { useLogoutAPI } from '../../../hooks/API/welcome';

const LogoutModal = ({ open, onClose }: TModal) => {
  const { mutate: logout, isPending } = useLogoutAPI();

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center', mt: '15vh',
      }}>
      <Box sx={{
        backgroundColor: 'secondary.darker',
        padding: 4,
        borderRadius: 3,
        boxShadow: 24,
        minWidth: 300,
        width: { xs: '90%', sm: 400 },
        maxWidth: 500,
        textAlign: 'center',
        position: 'relative'
      }}>
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', top: 10, right: 10, color: 'white', }}
        >
          <Close fontSize="medium" />
        </IconButton>

        <Warning sx={{ color: 'white' }} fontSize={'large'} />

        <Typography variant="h6" sx={{ mb: 3, color: 'white', textTransform: 'none' }}>
          Та итгэлтэй байна уу?
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            sx={{
              color: 'white', backgroundColor: 'secondary.main', fontWeight: 'bold', textTransform: 'none'
            }}
            fullWidth
            variant="contained"
            onClick={onClose}>
            Үгүй
          </Button>
          <Button
            disabled={isPending}
            sx={{
              color: 'white', backgroundColor: 'primary.main', fontWeight: 'bold', textTransform: 'none'
            }}
            fullWidth variant="contained" onClick={handleLogout}>
            Тийм
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export { LogoutModal };