const NAVBAR_MENUS = [
  { url: '/appointments', name: 'Оочир' },
  { url: '/profile', name: 'Профайл' },
];

const CONTROLLERS = {
  CUSTOMER: 'customer',
  BUSINESS: 'business',
} as const;

export { NAVBAR_MENUS, CONTROLLERS };
