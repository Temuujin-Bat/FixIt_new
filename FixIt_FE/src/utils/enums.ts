const QUERY_KEYS = {
  // events
  EVENTS: {
    CURRENT_MONTH_EVENTS: "currentMonthEvents",
    NEXT_MONTH_EVENTS: "nextMonthEvents",
    USER_EVENTS: "userEvents",
  },
  SHOP: {
    GET_SHOP_PRODUCTS: "getShopProducts",
  },
  PROFILE: "profile",
} as const;

const STORE_SLICES = {} as const;

const PERSIST_KEYS = {} as const;

export { STORE_SLICES, PERSIST_KEYS, QUERY_KEYS };
