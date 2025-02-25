import { useMemo } from 'react';
import { useAppSelector } from '../../../hooks/useAppStore';
import { getProductsFilters, getStoreProducts } from '../../../store/products/selectors';

export function useProductsFilters() {
  const products = useAppSelector(getStoreProducts);

  const selectedFilterItems = useAppSelector(getProductsFilters);

  const getProductsByFilters = useMemo(() => {
    let filteredProducts = products;

    if (selectedFilterItems.filterCategories?.length) {
      filteredProducts = products.filter((product) => product.category === selectedFilterItems.filterCategories);
    }

    if (selectedFilterItems.filterStock) {
      filteredProducts = products.filter((product) => product.inStock);
    }

    if (selectedFilterItems.filterBrand?.length) {
      filteredProducts = products.filter((product) => selectedFilterItems.filterBrand.includes(product.brand as string));
    }

    if (selectedFilterItems.filterSale) {
      filteredProducts = products.filter((product) => product.isOnSale);
    }

    if (selectedFilterItems.filterPrice.start > 0) {
      filteredProducts = products.filter(
        (product) => parseFloat(product.price) >= selectedFilterItems.filterPrice.start,
      );
    }

    if (selectedFilterItems.filterPrice.end > 0) {
      filteredProducts = (filteredProducts || products).filter(
        (product) => parseFloat(product.price) <= selectedFilterItems.filterPrice.end,
      );
    }

    return filteredProducts;
  }, [selectedFilterItems, products]);

  return {
    getProductsByFilters,
  };
}
