import { FC, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// form
import { Controller, useForm } from 'react-hook-form';
// @mui
import {
  Box,
  Stack,
  Button,
  Divider,
  Typography,
} from '@mui/material';
// routes
import { useSnackbar } from 'notistack';
import Grid2 from '@mui/material/Unstable_Grid2';
import { TCheckoutCartItem, TProduct } from '../../../types';
import {
  FormProvider, Iconify, Label, ColorSinglePicker, IncrementerButton,
} from '../../../components';
import { fCurrency } from '../../../utils/formatNumber';

interface FormValuesProps extends Omit<TCheckoutCartItem, 'colors'> {
  colors: string;
}

type TProductDetailsSummary = {
  product: TProduct;
  cart: TCheckoutCartItem[];
  onAddCart: (cartItem: TCheckoutCartItem) => void;
  onGotoStep: (step: number) => void;
};

const ProductDetailsSummary: FC<TProductDetailsSummary> = ({
  cart,
  product,
  onAddCart,
  onGotoStep,
  ...other
}) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const alreadyProduct = cart.map((item) => item.id).includes(Number(product.id));

  const isMaxQuantity = cart.filter(
    (item) => Number(item.id) === Number(product.id),
  ).map((item) => item.quantity)[0] >= (product.unitsInStock || 0);

  const defaultValues = {
    id: product?.id,
    name: product?.name,
    thumbNail: product?.thumbNail,
    unitsInStock: product?.unitsInStock,
    price: product?.price,
    colors: product?.colors?.length ? product?.colors[0] : [],
    quantity: (product?.unitsInStock || 0) < 1 ? 0 : 1,
  };

  const methods = useForm<any>({
    defaultValues,
  });

  const {
    reset, watch, control, setValue, handleSubmit,
  } = methods;

  const values = watch();

  useEffect(() => {
    if (product) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  const onSubmit = async (data: FormValuesProps) => {
    try {
      if (!alreadyProduct) {
        onAddCart({
          ...data,
          colors: [values.colors],
          subtotal: data.price * data.quantity,
        });
      }
      onGotoStep(0);
      navigate('/checkout/payment');
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddCart = async () => {
    try {
      enqueueSnackbar('המוצר נוסף לעגלה', { variant: 'success' });
      onAddCart({
        ...values,
        colors: [values.colors],
        subtotal: values.price * values.quantity,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack
        spacing={3}
        sx={{
          p: (theme) => ({
            md: theme.spacing(5, 5, 0, 2),
          }),
        }}
        {...other}
      >
        <Box display="flex" justifyContent="flex-end">
          <Button
            component={RouterLink}
            to="/stores/airsoft4u"
            variant="outlined"
            sx={{
              width: 150,
            }}
            endIcon={<Iconify icon="eva:arrow-ios-back-fill" />}
          >
            המשך בקניות
          </Button>
        </Box>
        <Stack spacing={2}>
          <Grid2
            sx={{
              p: 0,
            }}
            container
            spacing={2}
          >
            <Grid2
              sx={{
                p: 0,
              }}
              xs={12}
              lg={6}
            >
              <Label
                variant="soft"
                color={product.inStock ? 'success' : 'error'}
                sx={{ textTransform: 'uppercase', mr: 1 }}
              >
                {product.inStock ? 'במלאי' : 'חסר במלאי'}
              </Label>
              {product.isOnSale && (
                <Label
                  variant="soft"
                  color={(product.onSaleData?.salePrice || 0) > 0 ? 'warning' : 'error'}
                  sx={{ textTransform: 'uppercase', mr: 'auto' }}
                >
                  {product.isOnSale ? 'במבצע' : ''}
                </Label>
              )}
            </Grid2>
          </Grid2>

          <Typography variant="h5">{product.name}</Typography>

          <Typography variant="h4">
            {(product.onSaleData?.salePrice || 0) > 0 && (
              <Box
                component="span"
                sx={{ color: 'text.disabled', textDecoration: 'line-through', mr: 0.5 }}
              >
                {fCurrency(product.price || 0)}
              </Box>
            )}

            {fCurrency((product.onSaleData?.salePrice || 0) > 0 ? (product.onSaleData?.salePrice || 0) : product.price)}
          </Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {(product?.colors?.length || 0) > 0 && (
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle2">צבע</Typography>

          <Controller
            name="colors"
            control={control}
            render={({ field }) => (
              <ColorSinglePicker
                colors={product?.colors || []}
                value={field.value}
                onChange={field.onChange}
                sx={{
                  ...((product?.colors?.length || 0) > 4 && {
                    maxWidth: 144,
                    justifyContent: 'flex-end',
                  }),
                }}
              />
            )}
          />
        </Stack>
        )}

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle2" sx={{ height: 36, lineHeight: '36px' }}>
            כמות
          </Typography>

          <Stack spacing={1}>
            <IncrementerButton
              name="quantity"
              quantity={values.quantity}
              disabledDecrease={values.quantity <= 1}
              disabledIncrease={values.quantity >= (product.unitsInStock || 0)}
              onIncrease={() => setValue('quantity', values.quantity + 1)}
              onDecrease={() => setValue('quantity', values.quantity - 1)}
            />
          </Stack>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack
          sx={{
            pb: { xs: 2 },
          }}
          direction="row"
          spacing={2}
        >
          <Button
            fullWidth
            disabled={isMaxQuantity}
            size="large"
            color="warning"
            variant="contained"
            startIcon={<Iconify icon="ic:round-add-shopping-cart" />}
            onClick={handleAddCart}
            sx={{ whiteSpace: 'nowrap' }}
          >
            הוסף לעגלה
          </Button>

          <Button fullWidth size="large" type="submit" variant="contained">
            קנה עכשיו
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export {
  ProductDetailsSummary,
};
