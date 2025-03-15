import { TAppointment } from "./appointments.type";

export type TGallery = {
  id: number;
  barbershopId: number;
  image_url: string;
};

export type TServices = {
  id: number;
  workerId: number;
  name: string;
  price: number;
  duration: number;
};

export type TWorker = {
  id: number;
  barbershopId: number;
  name: string;
  phone: string;
  startTime: string;
  endTime: string;
  services: TServices[];
  unavailable: TUnavailableSlot[];
  appointments: TAppointment[];
};

export type TUnavailableSlot = {
  id: number;
  workerId: number;
  date: string;
  start: string;
  end: string;
  note: string;
};

export type TReview = {
  id: number;
  userId: number;
  userName: string;
  barberShopId: number;
  rating: number;
  comment?: string;
  createdAt: string;
};

export type TBarbershops = {
  id: number;
  name: string;
  phone: string;
  location: {
    address: string;
    XCoordinates?: string;
    YCoordinates?: string;
  };
  logo?: string;
  facebookLink?: string;
  instagramLink?: string;
  gallery: TGallery[];
  workers: TWorker[];
  reviews: TReview[];
};
