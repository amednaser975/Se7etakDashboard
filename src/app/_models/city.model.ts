import { Area } from './area.model';

export interface City {
  id?: number;
  name: string;
  enName: string;
  isActive: boolean;
  countryId: number;
  areas?: Area[];
}
