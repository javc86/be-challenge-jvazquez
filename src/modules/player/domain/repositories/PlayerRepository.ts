import { GetAllByParams, Player } from "../entities/Player";

export interface PlayerRepository {
  getAllByLeague: (param: GetAllByParams) => Promise<Player[] | []>;
  getAllBy: (param: GetAllByParams) => Promise<Player[] | []>;
}