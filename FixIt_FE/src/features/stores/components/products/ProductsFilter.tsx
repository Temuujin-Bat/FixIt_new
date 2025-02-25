import {
  useCallback, FC, useMemo,
} from 'react';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Stack, { StackProps } from '@mui/material/Stack';

import { useBoolean } from '../../../../hooks/useBoolean';
import { Iconify } from '../../../../components';
import { useResponsive } from '../../../../hooks/useResponsive';
import { FilterCategory } from './FilterCategory';
import { FilterPrice } from './FilterPrice';
import { FilterStock } from './FilterStock';
import { FilterBrand } from './FilterBrand';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useAppStore';
import { getProductsFilters, getStoreProducts } from '../../../../store/products/selectors';
import { productActions } from '../../../../store/products/slice';
import { FilterSale } from './FilterSale';
import { TProductsFilters } from '../../../../types';
import {setStoreCurrentPage} from "../../../../store/stores/slice";

interface IBlockProps extends StackProps {
  title: string;
  children: React.ReactNode;
}

function Block({ title, children, ...other }: IBlockProps) {
  const contentOpen = useBoolean(true);

  return (
    <Stack alignItems="flex-start" sx={{ width: 1 }} {...other}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        onClick={contentOpen.onToggle}
        sx={{ width: 1, cursor: 'pointer' }}
      >
        <Typography variant="h6">{title}</Typography>

        <Iconify
          icon={contentOpen.value ? 'carbon:subtract' : 'carbon:add'}
          sx={{ color: 'text.secondary' }}
        />
      </Stack>

      <Collapse unmountOnExit in={contentOpen.value} sx={{ px: 0.5 }}>
        {children}
      </Collapse>
    </Stack>
  );
}

type TProductsFilter = {
  open: boolean;
  onClose: VoidFunction;
};

const ProductsFilter: FC<TProductsFilter> = ({ open, onClose }) => {
  const mdUp = useResponsive('up', 'lg');
  const products = useAppSelector(getStoreProducts);
  const productsFilters = useAppSelector(getProductsFilters);
  const dispatch = useAppDispatch();

  const categoryAndBrandOptions = useMemo(() => {
    if (!products) return { categories: [], brands: [] };

    const categories = new Set();
    const brands = new Set();

    products.forEach((product) => {
      if (product.category) categories.add(product.category);
      if (product.brand) brands.add(product.brand);
    });

    return {
      categories: Array.from(categories),
      brands: Array.from(brands),
    };
  }, [products]);

  const getSelected = (selectedItems: string[], item: string) => (selectedItems.includes(item)
    ? selectedItems.filter((value) => value !== item)
    : [...selectedItems, item]);

  const handleChangeCategories = useCallback(
    (name: string) => {
      dispatch(setStoreCurrentPage(1))
      dispatch(productActions.setProductsFilters({
        ...productsFilters,
        filterCategories: name,
      }));
    },
    [productsFilters],
  );

  const handleChangeBrand = useCallback(
    (name: string) => {
      dispatch(setStoreCurrentPage(1))
      dispatch(productActions.setProductsFilters({
        ...productsFilters,
        filterBrand: getSelected(productsFilters.filterBrand, name),
      }));
    },
    [productsFilters],
  );

  const handleChangeStartPrice = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setStoreCurrentPage(1))
      dispatch(productActions.setProductsFilters({
        ...productsFilters,
        filterPrice: {
          ...productsFilters.filterPrice,
          start: Number(event.target.value),
        },
      }));
    },
    [productsFilters],
  );

  const handleChangeEndPrice = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setStoreCurrentPage(1))
      dispatch(productActions.setProductsFilters({
        ...productsFilters,
        filterPrice: {
          ...productsFilters.filterPrice,
          end: Number(event.target.value),
        },
      }));
    },
    [productsFilters],
  );

  const handleChangeStock = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setStoreCurrentPage(1))
      dispatch(productActions.setProductsFilters({
        ...productsFilters,
        filterStock: event.target.checked,
      }));
    },
    [productsFilters],
  );

  const handleChangeSale = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setStoreCurrentPage(1))
      dispatch(productActions.setProductsFilters({
        ...productsFilters,
        filterSale: event.target.checked,
      }));
    },
    [productsFilters],
  );

  const handleClearAll = useCallback(() => {
    dispatch(setStoreCurrentPage(1))
    dispatch(productActions.resetProductsFilters({} as TProductsFilters));
  }, []);

  const renderContent = (
    <Stack
      spacing={3}
      alignItems="flex-start"
      sx={{
        flexShrink: 0,
        width: { xs: 1, md: 280 },
      }}
    >
      <Block title="קטגוריה">
        <FilterCategory
          filterCategories={productsFilters.filterCategories}
          onChangeCategories={handleChangeCategories}
          options={categoryAndBrandOptions.categories as Array<string>}
          sx={{ mt: 2 }}
        />
      </Block>

      <Block title="מותג">
        <FilterBrand
          filterBrand={productsFilters.filterBrand}
          onChangeBrand={handleChangeBrand}
          options={categoryAndBrandOptions.brands as Array<string>}
          sx={{ mt: 1 }}
        />
      </Block>

      <Block title="מחיר">
        <FilterPrice
          filterPrice={productsFilters.filterPrice}
          onChangeStartPrice={handleChangeStartPrice}
          onChangeEndPrice={handleChangeEndPrice}
          sx={{ mt: 2 }}
        />
      </Block>

      {/* <Block title="Shipping"> */}
      {/*  <FilterShipping */}
      {/*    filterShipping={filters.filterShipping} */}
      {/*    onChangeShipping={handleChangeShipping} */}
      {/*    options={SHIPPING_OPTIONS} */}
      {/*    sx={{ mt: 1 }} */}
      {/*  /> */}
      {/* </Block> */}

      <FilterStock filterStock={productsFilters.filterStock} onChangeStock={handleChangeStock} />

      <FilterSale filterSale={productsFilters.filterSale} onChangeSale={handleChangeSale} />

      <Button
        fullWidth
        size="large"
        variant="contained"
        endIcon={<Iconify icon="carbon:trash-can" />}
        onClick={handleClearAll}
      >
        נקה סינון
      </Button>
    </Stack>
  );

  return (
    <>
      {mdUp ? (
        renderContent
      ) : (
        <Drawer
          anchor="right"
          open={open}
          onClose={onClose}
          PaperProps={{
            sx: {
              pt: 3,
              px: 3,
              width: 280,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </>
  );
};

export {
  ProductsFilter,
};
