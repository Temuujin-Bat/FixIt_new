import { Link as RouterLink, useNavigate } from 'react-router-dom';
// @mui
import {
  Grid, Card, Button, CardHeader, Typography, Container,
} from '@mui/material';
// routes
import sum from 'lodash/sum';
import { useAppDispatch, useAppSelector } from '../../../hooks/useAppStore';
import { getCheckoutData } from '../../../store/products/selectors';
import { Iconify } from '../../../components';
import { productActions } from '../../../store/products/slice';
import { EmptyContent } from './EmptyContent';
import { CartList } from './CartList';
import { CartSummary } from './CartSummary';

const CartView = () => {
  const dispatch = useAppDispatch();
  const {
    cart,
  } = useAppSelector(getCheckoutData);
  const navigate = useNavigate();

  const subtotal = sum(cart?.map((product) => product.price * product.quantity));

  const subTotalSales = sum(
    cart?.map((product) => (product.onSaleData?.salePrice ? product.onSaleData.salePrice * product.quantity : 0)),
  );

  const discount = subTotalSales > 0 ? subtotal - subTotalSales : 0;

  const total = subtotal - discount;

  const isEmptyCart = !cart.length;

  const onApplyDiscount = (value: number) => {
    if (cart.length) {
      dispatch(productActions.applyDiscount(value));
    }
  };

  const onDeleteCart = (productId: number) => {
    dispatch(productActions.deleteCart(productId));
  };

  const goToPayment = () => {
    navigate('/checkout/payment');
  };

  const onIncreaseQuantity = (productId: number) => {
    dispatch(productActions.increaseQuantity(productId));
  };

  const onDecreaseQuantity = (productId: number) => {
    dispatch(productActions.decreaseQuantity(productId));
  };

  return (
    <Container
      sx={{
        overflow: 'hidden',
        pt: 5,
        pb: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ mb: 3 }}>
            <CardHeader
              title={(
                <Typography variant="h6">
                  עגלת קניות
                </Typography>
            )}
              sx={{ mb: 3 }}
            />

            {!isEmptyCart ? (
              <CartList
                products={cart}
                onDelete={onDeleteCart}
                onIncreaseQuantity={onIncreaseQuantity}
                onDecreaseQuantity={onDecreaseQuantity}
              />
            ) : (
              <EmptyContent
                title="העגלה ריקה"
                description="Look like you have no items in your shopping cart."
                img="/assets/illustrations/illustration_empty_cart.svg"
              />
            )}
          </Card>

          <Button
            component={RouterLink}
            to="/stores"
            color="inherit"
            endIcon={<Iconify icon="eva:arrow-ios-back-fill" />}
          >
            המשך בקניות
          </Button>
        </Grid>

        <Grid item xs={12} md={4}>
          <CartSummary
            enableDiscount={false}
            total={total}
            discount={subTotalSales > 0 ? subtotal - subTotalSales : 0.0}
            subtotal={subtotal}
            onApplyDiscount={onApplyDiscount}
          />
          <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            disabled={!cart.length}
            onClick={goToPayment}
          >
            לתשלום
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export {
  CartView,
};
