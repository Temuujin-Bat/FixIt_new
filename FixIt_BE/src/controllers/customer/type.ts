export type TGallery = {
  id: number;
  barberShopId: number;
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
  barberShopId: number;
  phone: string;
  name: string;
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

export type TAppointment = {
  id: number;
  barberShopId: number;
  workerId: number;
  serviceId: number;
  customerName: string;
  phone: string;
  date: string;
  startTime: string;
  endTime: string;
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

export type TBarbershop = {
  id: number;
  name: string;
  logo?: string;
  location: {
    address: string;
    XCoordinates?: string,
    YCoordinates?: string,
  };
  phone: string;
  image: string;
  facebookLink?: string;
  instagramLink?: string;
  gallery: TGallery[];
  workers: TWorker[];
  reviews: TReview[];
};
