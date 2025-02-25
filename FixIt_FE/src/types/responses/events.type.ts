// Components
import { TArenas } from "../arenas.type";
import { IBaseResponse } from "./common";

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

export type TEventRes = IBaseResponse & {
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
};
