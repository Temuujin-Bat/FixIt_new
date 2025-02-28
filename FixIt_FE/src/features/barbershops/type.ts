import { Barbershop } from '../../data/BarberData';

export type TModal = {
  open: boolean;
  onClose: () => void;
  barber?: Barbershop | null
}

export type TStepActions = {
  activeStep: number,
  next: () => void
}

export type TBarbershop = {
  id: number,
  image: string,
  location: string,
  name: string,
  rating: number,
  workers: TWorker[]
}

export type TService = {
  id: number,
  name: string,
  price: number,
  duration: number
}

export type TWorker = {
  id: number,
  name: string,
  services: TService[],
}
