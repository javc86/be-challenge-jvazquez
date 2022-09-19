import { GetAllByParams, Player } from "../entities/Player";

export interface PlayerRepository {
  getAllBy: (param: GetAllByParams) => Promise<Player[] | []>;
}