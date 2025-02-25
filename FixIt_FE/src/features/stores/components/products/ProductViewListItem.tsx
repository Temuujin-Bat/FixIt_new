import Fab from '@mui/material/Fab';
import Link from '@mui/material/Link';
import Stack, { StackProps } from '@mui/material/Stack';

import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { TProduct } from '../../../../types';
import {
  Iconify, Label, Markdown, TextMaxLine,
} from '../../../../components';
import Image from '../../../../components/image';
import { productActions } from '../../../../store/products/slice';
import { useAppDispatch } from '../../../../hooks/useAppStore';
import { CATEGORY_LABEL_MAP } from '../../../../data/tamirData/data';
import { ProductPrice } from './ProductPrice';

interface IProductViewListItem extends StackProps {
  product: TProduct;
}

const ProductViewListItem: FC<IProductViewListItem> = ({ product, ...other }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onProductClicked = () => {
    dispatch(productActions.setSelectedProduct(product));
    navigate('/store/product');
  };

  return (
    <Stack
      direction="row"
      sx={{
        position: 'relative',
        '&:hover .add-to-cart': {
          opacity: 1,
        },
      }}
      {...other}
    >
      {/* {product.label === 'new' && ( */}
      {/*  <Label */}
      {/*    color="info" */}
      {/*    sx={{ */}
      {/*      position: 'absolute', m: 1, top: 0, left: 0, zIndex: 9, */}
      {/*    }} */}
      {/*  > */}
      {/*    NEW */}
      {/*  </Label> */}
      {/* )} */}

      {(product?.onSaleData?.salePrice || 0) > 0 && (
        <Label
          color="error"
          sx={{
            position: 'absolute', m: 1, top: 0, right: 0, zIndex: 9,
          }}
        >
          SALE
        </Label>
      )}

      <Fab
        onClick={onProductClicked}
        className="add-to-cart"
        color="primary"
        size="small"
        sx={{
          right: 8,
          zIndex: 9,
          top: 8,
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
          mr: 4,
          width: 160,
          flexShrink: 0,
          borderRadius: 1.5,
          bgcolor: 'background.neutral',
        }}
      />

      <Stack spacing={1}>
        <Stack spacing={0.5}>
          <TextMaxLine variant="caption" line={1} sx={{ color: 'text.disabled' }}>
            {CATEGORY_LABEL_MAP[product.category || '']}
          </TextMaxLine>

          <Link
            onClick={onProductClicked}
            color="inherit"
          >
            <TextMaxLine variant="h6" line={1}>
              {product.name}
            </TextMaxLine>
          </Link>
        </Stack>

        <Markdown content={product.description || ''} />

        <ProductPrice
          price={parseFloat(product.price)}
          priceSale={product.onSaleData?.salePrice}
          sx={{ typography: 'h6' }}
        />
      </Stack>
    </Stack>
  );
};

export {
  ProductViewListItem,
};
