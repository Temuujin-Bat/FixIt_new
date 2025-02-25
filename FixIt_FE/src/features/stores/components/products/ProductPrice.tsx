import Box from '@mui/material/Box';
import Stack, { StackProps } from '@mui/material/Stack';
import { FC } from 'react';
import { fCurrency } from '../../../../utils/formatNumber';

interface IProductPrice extends StackProps {
  price: number;
  priceSale?: number;
}

const ProductPrice: FC<IProductPrice> = ({
  price, priceSale = 0, sx, ...other
}) => (
  <Stack direction="row" sx={{ typography: 'subtitle2', ...sx }} {...other}>
    {fCurrency(priceSale > 0 ? priceSale : price)}

    <Box
      component="span"
      sx={{
        ml: 0.5,
        color: 'text.disabled',
        textDecoration: 'line-through',
        fontWeight: 'fontWeightMedium',
      }}
    >
      {priceSale > 0 && fCurrency(price)}
    </Box>
  </Stack>
);

export {
  ProductPrice,
};
