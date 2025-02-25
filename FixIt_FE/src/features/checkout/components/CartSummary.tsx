// @mui
import {
  Box,
  Card,
  Stack,
  Button,
  Divider,
  TextField,
  CardHeader,
  Typography,
  CardContent,
  InputAdornment,
} from '@mui/material';
// utils
// components
import { FC } from 'react';
import { Iconify } from '../../../components';
import { fCurrency } from '../../../utils/formatNumber';
import { useAppSelector } from '../../../hooks/useAppStore';
import { getCheckoutData } from '../../../store/products/selectors';

type TCartSummary = {
  total: number;
  discount?: number;
  subtotal: number;
  onEdit?: VoidFunction;
  enableEdit?: boolean;
  onApplyDiscount?: (discount: number) => void;
  enableDiscount?: boolean;
};

const CartSummary: FC<TCartSummary> = ({
  total,
  onEdit,
  discount,
  subtotal,
  onApplyDiscount,
  enableEdit = false,
  enableDiscount = false,
}) => {
  const { cart } = useAppSelector(getCheckoutData);

  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader
        title="סיכום הזמנה"
        action={
          enableEdit && (
            <Button size="small" onClick={onEdit} startIcon={<Iconify icon="eva:edit-fill" />}>
              Edit
            </Button>
          )
        }
      />

      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              סכום הזמנה
            </Typography>
            <Typography variant="subtitle2">{fCurrency(subtotal)}</Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              מוצרים
            </Typography>
            <Typography variant="subtitle2">
              {cart?.length || 0}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              הנחה
            </Typography>
            <Typography variant="subtitle2">{discount ? fCurrency(-discount) : '-'}</Typography>
          </Stack>

          <Divider />

          {enableDiscount && onApplyDiscount && (
            <TextField
              fullWidth
              placeholder="קוד קופון"
              value=""
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button onClick={() => onApplyDiscount(0)} sx={{ mr: -0.5 }}>
                      Apply
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          )}

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle1">סך הכל לתשלום</Typography>
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>
                {total > 0 ? fCurrency(total) : '0.0 ₪'}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export {
  CartSummary,
};
