export const RentalsData = [
  {
    id: 4,
    title: "Counter Strike Beit Dagan",
    description: "",
    contactName: "אור",
    contactEmail: "",
    contactPhone: "0542-025-867",
    price: 200.0,
    kit: ["כלי ארוך מתוחזק היטב", "מיגון מלא", "תחמושת והדרכה", "אווירה טובה"],
    picUrl: "/assets/Rentals/CounterStrikeLogo.jpg",
    regions: ["מרכז"],
  },{
    id: 1,
    title: "חנות בית דגן",
    description: "השכרת כלים וציוד לימי משחק",
    contactName: "תמיר",
    contactEmail: "sonoma_tamir123@walla.co.il",
    contactPhone: "0525-556-635",
    price: 200.0,
    kit: ["כלי ארוך", "מחסניות ותחמושת", "מיגון פנים", "מיגון עיניים"],
    picUrl: "/assets/Rentals/TamirLogo2.png",
    regions: ["מרכז"],
  },
  {
    id: 2,
    title: "Airsoft for you",
    description: "השכרת כלים וציוד לימי משחק",
    contactName: "רומן",
    contactEmail: "",
    contactPhone: "0527-211-716",
    price: 200.0,
    kit: ["כלי ארוך", "מחסניות ותחמושת", "מיגון פנים", "מיגון עיניים"],
    picUrl: "/assets/Rentals/AirsoftForYouLogo.png",
    regions: ["מרכז"],
  },
  {
    id: 3,
    title: "Red Team",
    description: "השכרת כלים, אימונים והפעלות אקשן קבוצתיות באיירסופט",
    contactName: "ליאור",
    contactEmail: "",
    contactPhone: "0502-810-137",
    price: 200.0,
    kit: ["כלי ארוך", "תחמושת", "מיגון", "מדריך"],
    picUrl: "/assets/Rentals/RedTeamLogo.png",
    regions: ["מרכז"],
  }
];

export interface IRentalProvider {
  id: number;
  title: string;
  description: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  price: number;
  kit: string[];
  regions: string[];
  picUrl: string;
}
