import { Team } from "../../../team/domain/entities/Team";

export interface Player {
  id?: number;
  name: string;
  position: string;
  dateOfBirth: string;
  countryOfBirth: string;
  nationality: string;
  team: Team;
}