// MUI
import { Box, Button, IconButton, Modal, Slide, Stack, TextField, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';

// Hooks

const RegisterModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <Modal open={open} onClose={onClose}
           sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', mt: '15vh', }}>
      <Slide direction="down" in={open} timeout={400}>
        <Box sx={{
          backgroundColor: 'background.paper',
          padding: 4,
          borderRadius: 3,
          boxShadow: 24,
          minWidth: 300,
          position: 'relative',
          width: { xs: '90%', sm: 400, md: 500 },
          maxWidth: 600,
        }}>
          <IconButton
            onClick={onClose}
            sx={{ position: 'absolute', top: 10, right: 10, color: 'black', }}
          >
            <Close fontSize="medium" />
          </IconButton>

          <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>Сайн байна уу? Бүртгүүлэхийн тулд мэдээллээ
            оруулна
            уу.</Typography>

          <Stack spacing={3}>
            <TextField fullWidth variant="outlined" label="Бүтэн нэр" />

            <TextField fullWidth variant="outlined" label="Утасны дугаар" />

            <TextField fullWidth variant="outlined" label="Нууц үг" type="password" />
          </Stack>

          <Button fullWidth variant="contained" sx={{
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#2a2c32',
            borderRadius: 2.5,
            padding: 1.5,
            boxShadow: 'none',
            mt: 3
          }}>
            Бүртгүүлэх
          </Button>
        </Box>
      </Slide>
    </Modal>
  );
};

export default RegisterModal;