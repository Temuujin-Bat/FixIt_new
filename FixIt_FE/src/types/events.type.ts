import { TArenas } from "./arenas.type";

interface IEventLink {
  title?: string;
  link?: string;
  type?: string;
}
interface IRegisteredPlayer {
  eventId: number;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface TEvent {
  eventId: number;
  isPublished: boolean;
  isPublic: boolean;
  status: string;
  creatorEmail?: string;
  locationInfo: {
    name: string;
    isArena: boolean;
    arena?: TArenas;
    address: {
      addressString: string;
      cityName?: string;
      streetName?: string;
      streetNumber?: string;
      XCoordinate?: string;
      YCoordinate?: string;
      wazeLink?: string;
      guidance: string;
    };
  };
  isPaid: boolean;
  paymentInfo?: {
    amount: number;
    description: string;
    paymentLink?: string;
    payInPlace: boolean;
    registerInPlace: boolean;
  };
  contactInfo: {
    name: string;
    email?: string;
    phoneNumber?: string;
  };
  eventInfo: {
    title: string;
    subtitle: string;
    description: string;
    eventPhoto?: string;
    gallery?: string[];
    start: string;
    end: string;
    facebookLink?: string;
    registeredPlayers?: IRegisteredPlayer[];
    registeredPlayerCount: number;
    registeredTeams?: string[];
    registrationRequired: boolean;
    rentalsInPlace: boolean;
    sellersInPlace: boolean;
    marshalsInPlace: boolean;
    bathroomInPlace: boolean;
    waterInPlace: boolean;
    isTeamsOnlyEvent: boolean;
    minimalTeamSize: number;
    maximalTeamSize: number;
    isPrizedEvent: boolean;
    prizeInfo?: {
      title: string;
      subtitle: string;
      gallery?: string[];
    };
  };
  postEventInfo: {
    winner: string;
    eventLinks: IEventLink[];
  };
}

export interface DBEventModel {
  id?: number;
  creatorEmail?: string;
  isPublished: boolean; // public or not
  isPublic: boolean;
  status?: string;

  // Arena
  isArena: boolean;
  arena?: TArenas;
  arenaName: string;

  // Full Address
  address_addressString: string;
  address_guidance: string;
  address_cityName?: string;
  address_streetName?: string;
  address_streetNumber?: string;
  address_XCoordinate?: string;
  address_YCoordinate?: string;
  address_wazeLink?: string;

  // Payment and Register
  isPaid: boolean;
  payment_amount?: number;
  payment_description?: string;
  payment_paymentLink?: string;
  payment_payInPlace?: boolean;
  payment_registerInPlace?: boolean;

  // Contact
  contact_name: string;
  contact_email?: string;
  contact_phoneNumber?: string;

  // Event Information
  event_title: string;
  event_subtitle: string;
  event_description: string;
  event_gallery?: (string | null)[];
  event_start: string;
  event_end: string;
  event_facebookLink?: string;
  event_registrationRequired: boolean;
  event_registeredPlayers?: IRegisteredPlayer[];
  event_registeredPlayerCount?: number;
  event_registeredTeams?: string[];
  event_rentalsInPlace: boolean;
  event_sellersInPlace: boolean;
  event_marshalsInPlace: boolean;
  event_bathroomInPlace: boolean;
  event_waterInPlace: boolean;
  event_isTeamsOnlyEvent?: boolean;
  event_minimalTeamSize?: number;
  event_maximalTeamSize?: number;

  // Prize
  event_isPrizedEvent: boolean;
  event_prize_title?: string;
  event_prize_subtitle?: string;
  event_prize_gallery?: string[];

  // Post Event
  postEvent_links?: IEventLink[];
  postEvent_winner?: string;
}
