import { TArenas } from "../../types";

export interface IEventLink {
  title?: string;
  link?: string;
  type?: string;
}

export interface IRegisteredPlayer {
  eventId: number;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface DBEventModel {
  id?: number;
  creatorEmail?: string;
  isPublished: boolean;
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
  event_prize_gallery?: [];

  // Post Event
  postEvent_links?: IEventLink[];
  postEvent_winner?: string;
}
