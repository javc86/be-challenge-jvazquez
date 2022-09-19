import { GetAllByParams, Team } from "../entities/Team";

export interface TeamRepository {
  getAllBy: (params: GetAllByParams) => Promise<Team[] | []>;
}