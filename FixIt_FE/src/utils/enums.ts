const CONTROLLERS = {
  CUSTOMER: 'customer',
  BUSINESS: 'business',
} as const;

const STORE_SLICES = {
  AUTHENTICATE: 'authenticate',
} as const;

const PERSIST_KEYS = {
  AUTH: 'auth',
} as const;

const QUERY_KEYS = {} as const;

export {
  CONTROLLERS,
  STORE_SLICES,
  PERSIST_KEYS,
  QUERY_KEYS,
};
