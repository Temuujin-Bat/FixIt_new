import Box from '@mui/material/Box';
import {RHFTextField} from "../../../components";


const CheckoutShippingDetails = () => {
  return (
    <Box
      rowGap={2.5}
      columnGap={2}
      display="grid"
      gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
    >
      <RHFTextField name="streetAddress" label="כתובת" />

      <RHFTextField name="zipcode" label="מיקוד" />

      <RHFTextField name="city" label="עיר" />
    </Box>
  );
}

export {
  CheckoutShippingDetails
}
