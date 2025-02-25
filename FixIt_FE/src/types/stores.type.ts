interface Address {
  addressString: string;
  cityName: string;
  streetName: string;
  streetNumber: string;
  XCoordinate: string;
  YCoordinate: string;
}

interface ContactInfo {
  email: string;
  phoneNumber: string;
}

interface Tags {
  onlineStore: boolean;
  physicalStore: boolean;
  parking: boolean;
}

export interface TStores {
  name: string;
  description: string;
  websiteLink: string;
  facebookLink: string;
  address: Address;
  contactInfo: ContactInfo;
  images: {
    logo: string;
    gallery: string[];
  };
  tags: Tags;
}

export type TProduct = {
  id: number;
  shopId: number;
  name: string;
  sku: string;
  price: string;
  inStock: boolean;
  description?: string;
  category?: string;
  unitsInStock?: number;
  isOnSale?: boolean;
  onSaleData?: {
    salePrice: number;
  };
  picUrl?: string;
  gallery?: string[];
  thumbNail?: string;
  vendor?: string;
  brand?: string;
  model?: string;
  colors?: string[];
  brandLogoUrl?: string;
  quantity?: number;
  isPublished: boolean;
};

export type TCheckoutCartItem = TProduct & {
  id: number;
  name: string;
  thumbNail: string;
  unitsInStock?: number;
  price: number;
  colors: string[];
  quantity: number;
  subtotal: number;
  onSaleData?: {
    salePrice: number;
  };
};

export type TProductsFilters = {
  filterBrand: Array<string>;
  filterCategories: string;
  filterStock: boolean;
  filterSale: boolean;
  filterPrice: {
    start: number;
    end: number;
  };
};
