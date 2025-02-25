const CONTROLLERS = {
  PRODUCTS: "products",
  ORDERS: "orders",
  LOGIN: "login",
  PROFILE: "profile",
  COMMON: "common",
  EVENTS: "events",
  USER_EVENTS: "events/user",
} as const;

const TOKEN_KEY = "ACPT_AUTH";

const DEFAULT_REQ_METHOD = "POST";

// Profile photos
const PROFILE_PHOTOS_URL =
  "https://airsoftavatarfiles.blob.core.windows.net/airsoftavatarfiles/";

// Products photos
const PRODUCTS_PHOTOS_URL =
  "https://airsoftavatarfiles.blob.core.windows.net/products/";

// Events photos
const EVENTS_PHOTOS_URL =
  "https://airsoftavatarfiles.blob.core.windows.net/events/";

const CONTACT_CATEGORIES = [
  {
    title: "הארות? הערות? בקשות מיוחדות?",
    category: "General",
  },
  {
    title: "הוספת חנות לרשימת החנויות",
    category: "Stores",
    url: "/stores",
  },
  {
    title:
      "הוסיפו את הזירה שלכם ואפשרו לקבוצות אחרות לתאם מולכם משחקים\n(אין צורך לחשוף את מיקום הזירה)",
    category: "Arenas",
    url: "/arenas",
  },
  {
    title: "הוספת סוגי משחקים",
    category: "Rules",
    url: "/game-types",
  },
  {
    title: "הוספת תשובות או שאלות נפוצות",
    category: "Faq",
    url: "/faq",
  },
  {
    title: "הוספת טכנאי לרשימת הטכנאים",
    category: "Tech",
    url: "/technicians",
  },
  {
    title: "הוספת משכיר לרשימת משכירי הכלים",
    category: "Rentals",
    url: "/rentals",
  },
];

export {
  CONTROLLERS,
  DEFAULT_REQ_METHOD,
  TOKEN_KEY,
  CONTACT_CATEGORIES,
  PROFILE_PHOTOS_URL,
  PRODUCTS_PHOTOS_URL,
  EVENTS_PHOTOS_URL,
};
