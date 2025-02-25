export interface TArenas {
  name: string;
  subtitle: string;
  description: string;
  type: string[] | null;
  tags: string[] | null;
  capacity?: string | null;
  location?: ILocation;
  region: string;
  privateArena: boolean;
  ownedByTeam: boolean;
  team?: {
    name?: string | null;
    logo?: string | null;
  };
  contactInfo: {
    email: string | null;
    phoneNumber: string | null;
    name: string | null;
  };
  wazeLink?: string | null;
  whatsAppLinks?: string[] | null;
  telegramLinks?: string[] | null;
  websiteLinks?: string[] | null;
  media?: {
    thumbNail?: string;
    logo?: string | null;
    photoGallery?: string[];
    videoGallery?: string[];
    ytVideoGallery?: string[];
  };
  status?: string | null;
  notes: string[] | null;
}

interface ILocation {
  addressString: string;
  cityName?: string;
  streetName?: string;
  streetNumber?: string;
  XCoordinate: string;
  YCoordinate: string;
  guidance?: string;
}

// export type TArenas = {
//   name: string;
//   subtitle: string;
//   description: string;
//   type: string[];
//   tags: string[];
//   capacity: string;
//   location: {
//     XCoordinate: string;
//     YCoordinate: string;
//     addressString: string;
//   };
//   region: string;
//   privateArena: boolean;
//   ownedByTeam: boolean;
//   team: {
//     name: string | null;
//     logo: string | null;
//   };
//   contactInfo: {
//     email: string | null;
//     phoneNumber: string | null;
//     name: string | null;
//   };
//   wazeLink: string;
//   whatsAppLinks: string[];
//   telegramLinks: string[];
//   websiteLinks: string | null;
//   media: {
//     thumbNail: string | null;
//     logo: string | null;
//     photoGallery: string[];
//     videoGallery: string[];
//     ytVideoGallery: string[];
//   };
//   status: string;
//   notes: string[];
// };
