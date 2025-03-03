// MUI
import { Box, Button, Typography } from '@mui/material';

// Third party
import { useNavigate } from 'react-router-dom';

// Components
import { TBarbershop } from '../type.ts';

const SixthStep = ({ barber }: { barber: TBarbershop | null }) => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" p={4}>
      <Typography variant="h4" color="success.main" gutterBottom>
        Амжилттай захиаллаа!
      </Typography>
      <Typography variant="body1" color="text.primary" sx={{ mt: 2 }}>
        Хэрэв танд асуулт байвал <br />
        <strong>{barber?.phone}</strong> дугаараар холбогдоорой!
      </Typography>

      <Button
        variant="contained"
        sx={{ mt: 3, fontWeight: 'bold', color: 'white' }}
        onClick={() => navigate('/appointments')}>
        Миний цагууд
      </Button>
    </Box>
  );
};

export { SixthStep };
