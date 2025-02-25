import React, { FC, useMemo } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Pagination, { paginationClasses } from "@mui/material/Pagination";

import { useIsFetching } from "@tanstack/react-query";
import { ProductViewListItem } from "./ProductViewListItem";
import { ProductViewGridItem } from "./ProductViewGridItem";
import { ProductViewGridItemSkeleton } from "./ProductViewGridItemSkeleton";
import { ProductViewListItemSkeleton } from "./ProductViewListItemSkeleton";
import { QUERY_KEYS } from "../../../../utils/enums";
import { useProductsFilters } from "../../hooks/useProductsFilters";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useAppStore.ts";
import { getStoreCurrentPage } from "../../../../store/stores/selectors.ts";
import { setStoreCurrentPage } from "../../../../store/stores/slice.ts";

type TProductsList = {
  viewMode: string;
};

const ProductsList: FC<TProductsList> = ({ viewMode }) => {
  const { getProductsByFilters } = useProductsFilters();
  const currentPage = useAppSelector(getStoreCurrentPage);
  const itemsPerPage = 16;
  const dispatch = useAppDispatch();

  const isFetching = useIsFetching({
    queryKey: [QUERY_KEYS.SHOP.GET_SHOP_PRODUCTS],
  });

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setStoreCurrentPage(value));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const paginatedProducts = useMemo(
    () =>
      getProductsByFilters.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      ),
    [getProductsByFilters, currentPage]
  );

  return (
    <>
      {viewMode === "grid" ? (
        <Box
          rowGap={4}
          columnGap={3}
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          }}
        >
          {(isFetching ? [...Array(itemsPerPage)] : paginatedProducts).map(
            (product, index) =>
              product ? (
                <ProductViewGridItem key={product.id} product={product} />
              ) : (
                <ProductViewGridItemSkeleton key={index?.toString()} />
              )
          )}
        </Box>
      ) : (
        <Stack spacing={4}>
          {(isFetching ? [...Array(itemsPerPage)] : paginatedProducts).map(
            (product, index) =>
              product ? (
                <ProductViewListItem key={product.id} product={product} />
              ) : (
                <ProductViewListItemSkeleton key={index?.toString()} />
              )
          )}
        </Stack>
      )}

      <Pagination
        count={Math.ceil((getProductsByFilters?.length || 0) / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        sx={{
          mt: 10,
          mb: 5,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: "center",
          },
        }}
      />
    </>
  );
};

export { ProductsList };
