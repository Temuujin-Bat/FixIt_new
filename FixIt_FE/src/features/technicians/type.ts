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
}
