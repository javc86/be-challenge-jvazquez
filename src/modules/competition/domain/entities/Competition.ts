import { Team } from "../../../team/domain/entities/Team";

export interface Competition {
  id?: number;
  name: string;
  code: string;
  areaName: string;
  Teams: Team[]
}
