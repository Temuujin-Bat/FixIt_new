import { useState } from 'react';

// MUI
import { Box, Button, IconButton, Modal, Stack, Typography } from '@mui/material';
import { Close, Visibility, VisibilityOff } from '@mui/icons-material';

// Third party
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Components
import { FormProvider, RHFTextField } from '../../../components/hookForm';

// Hooks
import { useLoginAPI } from '../../../hooks/API/welcome';

const loginSchema = yup.object().shape({
  phone: yup.string().min(8, 'Утасны дугаар 8 оронтой байх ёстой').required('Утасны дугаар оруулна уу'),
  password: yup.string().required('Нууц үг оруулна уу'),
});

const LoginModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: login, isPending } = useLoginAPI();

  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      phone: '',
      password: ''
    },
    mode: 'onChange',
  });

  const {
    reset,
    handleSubmit,
  } = methods;

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = async (data: { phone: string; password: string }) => {
    try {
      login(data);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}
           sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', mt: '15vh', }}>
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
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 10, right: 10, color: 'black', }}
          >
            <Close fontSize="medium" />
          </IconButton>

          <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>Сайн байна уу? Нэвтрэхийн тулд мэдээллээ
            оруулна
            уу.</Typography>

          <Stack spacing={3}>
            <RHFTextField
              label="Утасны дугаар"
              name="phone"
              inputProps={{ maxLength: 8 }}
            />

            <RHFTextField
              label="Нууц үг"
              name="password"
              type={showPassword ? 'text': 'password'}
              slotProps={{
                input: {
                  endAdornment: (
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="start"
                    >
                      {showPassword ? <VisibilityOff />: <Visibility />}
                    </IconButton>
                  )
                }
              }}
            />
          </Stack>

          <Button type="submit" disabled={isPending} fullWidth variant="contained" sx={{
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#2a2c32',
            borderRadius: 2.5,
            padding: 1.5,
            boxShadow: 'none',
            mt: 3
          }}>
            {isPending ? 'Нэвтэрч байна...': 'Нэвтрэх'}
          </Button>
        </FormProvider>
      </Box>
    </Modal>
  );
};

export default LoginModal;