const CONTROLLERS = {
  CUSTOMER: "customer",
  BUSINESS: "business",
} as const;

const STORE_SLICES = {
  AUTHENTICATE: "authenticate",
  BARBERSHOPS: "barbershops",
  APPOINTMENTS: "appointments",
} as const;

const PERSIST_KEYS = {
  AUTH: "auth",
  BARBERSHOPS: "barbershops",
  APPOINTMENTS: "appointments",
} as const;

const QUERY_KEYS = {
  BARBER_SHOPS: "barbershops",
  USER_APPOINTMENTS: "userAppointments",
} as const;

export { CONTROLLERS, STORE_SLICES, PERSIST_KEYS, QUERY_KEYS };
