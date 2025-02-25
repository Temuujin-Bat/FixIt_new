import Box from '@mui/material/Box';
import { RHFTextField } from '../../../components';

const CheckoutPersonalDetails = () => (
  <Box
    rowGap={2.5}
    columnGap={2}
    display="grid"
    gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
  >
    <RHFTextField name="firstName" label="שם פרטי" />

    <RHFTextField name="lastName" label="שם משפחה" />

    <RHFTextField name="emailAddress" label="אימייל" />

    <RHFTextField name="phoneNumber" label="טלפון" />
  </Box>
);

export {
  CheckoutPersonalDetails,
};
