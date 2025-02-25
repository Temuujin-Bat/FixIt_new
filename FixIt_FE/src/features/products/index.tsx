import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductDetailsCarousel, ProductDetailsSummary, ProductDetailsDescription } from './components';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppStore';
import { getCheckoutData, getSelectedProduct } from '../../store/products/selectors';
import { TCheckoutCartItem } from '../../types';
import { productActions } from '../../store/products/slice';
import { Markdown } from '../../components';

const ProductView = () => {
  const selectedProduct = useAppSelector(getSelectedProduct);
  const checkout = useAppSelector(getCheckoutData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState('description');

  const handleAddCart = (newProduct: TCheckoutCartItem) => {
    dispatch(productActions.addToCart(newProduct));
  };

  const handleGotoStep = () => {
    navigate('/checkout/payment');
  };

  const TABS = [
    {
      value: 'description',
      label: 'תיאור',
      component: selectedProduct ? <Markdown content={selectedProduct?.description as string} /> : null,
    },
    {
      value: 'details',
      label: 'פרטים טכניים',
      component: selectedProduct ? <ProductDetailsDescription /> : null,
    },
  ];

  return (
    <Container maxWidth="lg">
      {selectedProduct && (
        <>
          <Grid container spacing={3}>
            <Grid xs={12} md={6} lg={7}>
              <ProductDetailsCarousel />
            </Grid>

            <Grid xs={12} md={6} lg={5}>
              <ProductDetailsSummary
                product={selectedProduct}
                cart={checkout.cart}
                onAddCart={handleAddCart}
                onGotoStep={handleGotoStep}
              />
            </Grid>
          </Grid>

          <Card
            sx={{
              mb: 5,
              boxShadow: 'unset',
            }}
            elevation={0}
          >
            <Tabs
              value={currentTab}
              onChange={(_, newValue) => setCurrentTab(newValue)}
              sx={{ px: 3, bgcolor: 'background.neutral' }}
            >
              {TABS.map((tab) => (
                <Tab key={tab.value} value={tab.value} label={tab.label} />
              ))}
            </Tabs>

            <Divider />

            {TABS.map(
              (tab) => tab.value === currentTab && (
              <Box
                key={tab.value}
                sx={{
                  ...(currentTab === 'description' && {
                    p: 3,
                  }),
                }}
              >
                {tab.component}
              </Box>
              ),
            )}
          </Card>
        </>
      )}

    </Container>
  );
};

export {
  ProductView,
};
