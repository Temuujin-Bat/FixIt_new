import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import Stack, { StackProps } from '@mui/material/Stack';

import { FC } from 'react';
import { TProduct } from '../../../types';
import { fCurrency } from '../../../utils/formatNumber';
import Image from '../../../components/image';
import { Iconify, IncrementerButton, TextMaxLine } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../hooks/useAppStore';
import { getCheckoutData } from '../../../store/products/selectors';
import { productActions } from '../../../store/products/slice';
import { ProductPrice } from '../../stores/components/products/ProductPrice.tsx';

type ProductItemProps = StackProps & {
  product: TProduct;
};

function ProductItem({ product, ...other }: ProductItemProps) {
  const dispatch = useAppDispatch();
  const onIncreaseQuantity = () => {
    dispatch(productActions.increaseQuantity(product.id));
  };

  const onDecreaseQuantity = () => {
    dispatch(productActions.decreaseQuantity(product.id));
  };

  const onDeleteItem = () => {
    dispatch(productActions.deleteCart(product.id));
  };

  return (
    <Stack direction="row" alignItems="flex-start" {...other}>
      <Image
        src={product.thumbNail}
        sx={{
          mr: 2,
          width: 64,
          height: 64,
          flexShrink: 0,
          borderRadius: 1.5,
          bgcolor: 'background.neutral',
        }}
      />

      <Stack flexGrow={1}>
        <TextMaxLine variant="body2" line={1} sx={{ fontWeight: 'fontWeightMedium' }}>
          {product.name}
        </TextMaxLine>

        <Box pb={1}>
          <ProductPrice
            price={parseFloat(product.price)}
            priceSale={product.onSaleData?.salePrice}
          />
        </Box>

        <IncrementerButton
          quantity={product.quantity || 0}
          onDecrease={onDecreaseQuantity}
          onIncrease={onIncreaseQuantity}
          disabledDecrease={(product.quantity || 0) <= 1}
          disabledIncrease={(product.quantity || 0) >= (product.unitsInStock || 0)}
        />
      </Stack>

      <IconButton onClick={onDeleteItem}>
        <Iconify icon="carbon:trash-can" />
      </IconButton>
    </Stack>
  );
}

type RowProps = StackProps & {
  label: string;
  value: string;
};

function Row({
  label, value, sx, ...other
}: RowProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ typography: 'subtitle2', ...sx }}
      {...other}
    >
      <Box component="span" sx={{ typography: 'body2' }}>
        {label}
      </Box>
      {value}
    </Stack>
  );
}

type TCheckoutOrderSummary = {
  total: number;
  subtotal: number;
  shipping: number;
  discount: number;
  loading?: boolean;
};

const CheckoutOrderSummary: FC<TCheckoutOrderSummary> = ({
  total,
  subtotal,
  shipping,
  discount,
  loading,
}) => {
  const checkout = useAppSelector(getCheckoutData);

  return (
    <Stack
      spacing={3}
      sx={{
        p: 5,
        borderRadius: 2,
        border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
      }}
    >
      <Typography variant="h6">סיכום הזמנה</Typography>

      {!!checkout?.cart?.length && (
        <>
          {checkout?.cart?.map((product) => (
            <ProductItem key={product.id} product={product as unknown as TProduct} />
          ))}

          <Divider sx={{ borderStyle: 'dashed' }} />
        </>
      )}

      <Stack spacing={2}>
        <Row label="סכום הזמנה" value={fCurrency(subtotal)} />

        <Row label="משלוח" value={shipping > 0 ? fCurrency(shipping) : '0.0 ₪'} />

        <Row label="הנחה" value={discount > 0 ? `-${fCurrency(discount)}` : '0.0 ₪'} />
      </Stack>

      {/* <TextField */}
      {/*  hiddenLabel */}
      {/*  placeholder="קוד קופון" */}
      {/*  InputProps={{ */}
      {/*    endAdornment: ( */}
      {/*      <InputAdornment position="end"> */}
      {/*        <Button>Apply</Button> */}
      {/*      </InputAdornment> */}
      {/*    ), */}
      {/*  }} */}
      {/* /> */}

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Row
        label="סך הכל לתשלום"
        value={fCurrency(total)}
        sx={{
          typography: 'h6',
          '& span': { typography: 'h6' },
        }}
      />

      <LoadingButton
        disabled={checkout.cart?.length === 0}
        size="large"
        variant="contained"
        type="submit"
        loading={loading}
      >
        הזמן עכשיו
      </LoadingButton>
    </Stack>
  );
};

export {
  CheckoutOrderSummary,
};
