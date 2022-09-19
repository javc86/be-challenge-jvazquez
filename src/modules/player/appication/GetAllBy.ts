import { GetAllByParams, Player } from "../domain/entities/Player";
import { PlayerRepository } from "../domain/repositories/PlayerRepository";

class GetAllBy {
  private readonly _playerRepository: PlayerRepository;

  constructor(playerRepository: PlayerRepository) {
    this._playerRepository = playerRepository;
  }

  async run(param: GetAllByParams): Promise<Player[] | []> {
    return await this._playerRepository.getAllBy(param);
  }
}

export default GetAllBy;