import { ProductsView } from './ProductsView';
import { useGetShopProductsAPI } from '../../../hooks/API';
import { ArenaStoresDetailsHero } from './ArenaStoresDetailsHero';

const ArenaStoresView = () => {
  useGetShopProductsAPI();
  return (
    <>
      <ArenaStoresDetailsHero />
      <ProductsView />
    </>
  );
};

export {
  ArenaStoresView,
};
