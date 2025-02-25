import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useAppSelector } from '../../../hooks/useAppStore';
import { getSelectedProduct } from '../../../store/products/selectors';

const ProductDetailsDescription = () => {
  const selectedProduct = useAppSelector(getSelectedProduct);
  return (
    <Stack
      spacing={4}
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h6">Specifications</Typography>
        <Stack
          spacing={0.5}
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ sm: 'center' }}
          sx={{ typography: 'body2' }}
        >
          <Box component="span" sx={{ width: 160, color: 'text.secondary' }}>
            מותג
          </Box>
          <Box component="span">{selectedProduct.brand}</Box>
        </Stack>
        <Stack
          spacing={0.5}
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ sm: 'center' }}
          sx={{ typography: 'body2' }}
        >
          <Box component="span" sx={{ width: 160, color: 'text.secondary' }}>
            יצרן
          </Box>
          <Box component="span">{selectedProduct.vendor}</Box>
        </Stack>
        <Stack
          spacing={0.5}
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ sm: 'center' }}
          sx={{ typography: 'body2' }}
        >
          <Box component="span" sx={{ width: 160, color: 'text.secondary' }}>
            מודל
          </Box>
          <Box component="span">{selectedProduct.model}</Box>
        </Stack>
        <Stack
          spacing={0.5}
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ sm: 'center' }}
          sx={{ typography: 'body2' }}
        >
          <Box component="span" sx={{ width: 160, color: 'text.secondary' }}>
            מספר קטלוגי
          </Box>
          <Box component="span">{selectedProduct.sku}</Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export {
  ProductDetailsDescription,
};
