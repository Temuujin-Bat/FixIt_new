// MUI
import { Box, Button, Container, Tooltip, Typography } from '@mui/material';
import { ArrowBack, HeartBroken } from '@mui/icons-material';

// Third party
import { useNavigate } from 'react-router-dom';

// Components
import { ProfileTitle } from '../../features/profile/components';

const AppointmentPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 5, mb: 3
        }}
      >
        <Tooltip title="Буцах">
          <ArrowBack
            sx={{ mr: 1, '&:hover': { cursor: 'pointer' } }}
            onClick={() => navigate(-1)}
          />
        </Tooltip>
        <ProfileTitle text="Миний цагууд" />
      </Box>


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

        <Typography textAlign="center" variant="h4">Таны ирээдүйн цагууд байхгүй байна</Typography>
        <Typography mt={.5} textAlign="center" variant="body1" color="secondary.dark">Энд таны цагууд таны төвлөж
          дууссаны дараа гарч ирнэ</Typography>

        <Button onClick={() => navigate('/')} fullWidth variant="contained"
                sx={{
                  boxShadow: 'none',
                  fontWeight: 'bold',
                  color: 'white',
                  borderRadius: 2.5,
                  padding: 1.5,
                  mt: 3
                }}>
          Бизнес хайх
        </Button>
      </Box>
    </Container>
  );
};

export default AppointmentPage;