import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';
import { Iconify, MotionContainer, varBounce } from '../../../components';

const OrderCompletedView = () => (
  <Container
    component={MotionContainer}
    sx={{
      textAlign: 'center',
      pt: { xs: 5, md: 10 },
      pb: { xs: 10, md: 20 },
    }}
  >
    <m.div variants={varBounce().in}>
      <Box sx={{ fontSize: 128 }}>🎉</Box>
    </m.div>

    <Stack spacing={1} sx={{ my: 5 }}>
      <Typography variant="h3">הזמנך התקבלה בהצלחה!</Typography>

      <Typography sx={{ color: 'text.secondary' }}>
        האישור המבוקש ישלח למייל בהקדם.
      </Typography>
    </Stack>

    <Button
      component={Link}
      to="/stores"
      size="large"
      variant="contained"
      endIcon={<Iconify icon="carbon:chevron-left" />}
    >
      המשך קניות
    </Button>
  </Container>
);

export {
  OrderCompletedView,
};
