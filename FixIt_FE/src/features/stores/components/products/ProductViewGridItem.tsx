import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack, { StackProps } from '@mui/material/Stack';

import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { TCheckoutCartItem, TProduct } from '../../../../types';
import Image from '../../../../components/image';
import { Iconify, TextMaxLine, Label } from '../../../../components';
import { useAppDispatch } from '../../../../hooks/useAppStore';
import { productActions } from '../../../../store/products/slice';
import { CATEGORY_LABEL_MAP } from '../../../../data/tamirData/data';
import { ProductPrice } from './ProductPrice';

interface IProductViewGridItem extends StackProps {
  product: TProduct;
}

const ProductViewGridItem: FC<IProductViewGridItem> = ({ product, sx, ...other }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const onProductClicked = () => {
    enqueueSnackbar('המוצר נוסף לעגלה', { variant: 'success' });
    dispatch(productActions.addToCart({
      ...product,
      colors: product.colors || [],
      quantity: 1,
      subtotal: parseFloat(product.price),
    } as unknown as TCheckoutCartItem));
  };

  const navigateToProduct = () => {
    dispatch(productActions.setSelectedProduct(product));

    navigate('/store/product');
  };

  return (
    <Stack
      sx={{
        position: 'relative',
        '&:hover .add-to-cart': {
          opacity: 1,
        },
        ...sx,
      }}
      {...other}
    >
      {/* {product.label === 'new' && ( */}
      {/*  <Label */}
      {/*    color="info" */}
      {/*    sx={{ */}
      {/*      position: 'absolute', m: 1, top: 0, right: 0, zIndex: 9, */}
      {/*    }} */}
      {/*  > */}
      {/*    NEW */}
      {/*  </Label> */}
      {/* )} */}

      {(product?.onSaleData?.salePrice || 0) > 0 && (
        <Label
          color="primary"
          sx={{
            position: 'absolute', m: 1, top: 0, left: 0, zIndex: 9,
          }}
        >
          במבצע
        </Label>
      )}

      <Box sx={{ position: 'relative', mb: 2 }}>
        <Fab
          onClick={onProductClicked}
          className="add-to-cart"
          color="primary"
          size="small"
          sx={{
            left: 8,
            zIndex: 9,
            bottom: 8,
            opacity: 0,
            position: 'absolute',
            transition: (theme) => theme.transitions.create('opacity', {
              easing: theme.transitions.easing.easeIn,
              duration: theme.transitions.duration.shortest,
            }),
          }}
        >
          <Iconify icon="carbon:shopping-cart-plus" />
        </Fab>

        <Image
          src={product.thumbNail}
          sx={{
            flexShrink: 0,
            borderRadius: 1.5,
            bgcolor: 'background.neutral',
            width: 200,
            height: 200,
          }}
        />
      </Box>

      <Stack spacing={0.5}>
        <TextMaxLine variant="caption" line={1} sx={{ color: 'text.disabled' }}>
          {CATEGORY_LABEL_MAP[product.category || '']}
        </TextMaxLine>

        <Link
          onClick={navigateToProduct}
          color="inherit"
          sx={{
            cursor: 'pointer',
          }}
        >
          <TextMaxLine variant="body2" line={1} sx={{ fontWeight: 'fontWeightMedium' }}>
            {product.name}
          </TextMaxLine>
        </Link>

        <ProductPrice
          price={parseFloat(product.price)}
          priceSale={product.onSaleData?.salePrice}
        />
      </Stack>
    </Stack>
  );
};

export {
  ProductViewGridItem,
};
