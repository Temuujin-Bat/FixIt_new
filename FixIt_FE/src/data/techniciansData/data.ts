export const TechniciansData = [
  {
    id: 1,
    title: "ארי כהן",
    description: "טכנאי איירסופט",
    contactName: "ארי",
    contactEmail: "aricohen2323@gmail.com",
    contactPhone: "0525-926-788",
    services: ["תחזוקה שוטפת","שדרוג","תיקון"],
    regions: ["מרכז"],
    picUrl: "",
    websiteUrl: ""
  },
  {
    id: 2,
    title: "F.N TECHLAB",
    description: "מעבדה עם 20 שנות ניסיון בתחום",
    contactName: "בר",
    contactEmail: "",
    contactPhone: "0546-040-245",
    services: ["תיקון, שדרוג, תחזוקה שוטפת.","מומחים למערכות אוויר, חשמל - והסבת מערכות.","כלי צלפים, פרוייקטים מיוחדים."],
    regions: ["מרכז"],
    picUrl: '/assets/Technicians/BarMogilevsky/BarLogo.jpeg',
    websiteUrl: "https://www.facebook.com/profile.php?id=100063464026265&rdid=1nWvyHqRmoLkLmQi&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E6AparNsT%2F#"
  },
  {
    id: 3,
    title: "Airsoft 4 U",
    description: "שירותי טכנאות איירסופט",
    contactName: "תמיר",
    contactEmail: "sonoma_tamir123@walla.co.il",
    contactPhone: "0525-556-635",
    services: ["תחזוקה שוטפת","שדרוג","תיקון"],
    regions: ["מרכז"],
    picUrl: '/assets/Technicians/TamirStore/TamirLogo2.png',
    websiteUrl: "https://israelairsoft.com/stores/airsoft4u"
  },
  {
    id: 4,
    title: "בן פרוזנסקי",
    description: "טכנאי איירסופט",
    contactName: "בן",
    contactEmail: "",
    contactPhone: "0546-656-695",
    services: ["תחזוקה שוטפת","שדרוג","תיקון"],
    regions: ["מרכז"],
    picUrl: "",
    websiteUrl: ""
  },
  {
    id: 5,
    title: "סטיב",
    description: "טכנאי איירסופט",
    contactName: "סטיב",
    contactEmail: "",
    contactPhone: "0502-554-861",
    services: ["תחזוקה שוטפת","שדרוג","תיקון"],
    regions: ["מרכז"],
    picUrl: "",
    websiteUrl: ""
  },
  {
    id: 6,
    title: "תומר פפרינוב",
    description: "טכנאי איירסופט",
    contactName: "תומר",
    contactEmail: "",
    contactPhone: "0526-949-945",
    services: ["תחזוקה שוטפת","שדרוג","תיקון"],
    regions: ["מרכז"],
    picUrl: "",
    websiteUrl: ""
  },
  {
    id: 7,
    title: "לאון",
    description: "טכנאי איירסופט",
    contactName: "לאון",
    contactEmail: "",
    contactPhone: "0503-737-739",
    services: ["תחזוקה שוטפת","שדרוג","תיקון"],
    regions: ["מרכז"],
    picUrl: "",
    websiteUrl: ""
  },
  {
    id: 8,
    title: "דרור פחימה",
    description: "טכנאי איירסופט",
    contactName: "דרור",
    contactEmail: "",
    contactPhone: "0546-040-245",
    services: ["תחזוקה שוטפת","שדרוג","תיקון"],
    regions: ["מרכז"],
    picUrl: "",
    websiteUrl: ""
  },
  {
    id: 9,
    title: "ברק",
    description: "טכנאי איירסופט",
    contactName: "ברק",
    contactEmail: "",
    contactPhone: "0544-571-732",
    services: ["תחזוקה שוטפת","שדרוג","תיקון"],
    regions: ["מרכז"],
    picUrl: "",
    websiteUrl: ""
  }
];

export interface ITechnicianProvider {
  id: number;
  title: string;
  description: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  services: string[]; // max 5 strings
  regions: string[];
  picUrl: string;
  websiteUrl: string;
}
