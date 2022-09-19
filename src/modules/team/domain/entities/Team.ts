import { Competition } from "../../../competition/domain/entities/Competition";
import { Player } from "../../../player/domain/entities/Player";

export interface Team {
  id?: number;
  name: string;
  tla: string;
  shortName: string;
  areaName: string;
  email: string;
  Players: Player[];
  competition: Competition;
}