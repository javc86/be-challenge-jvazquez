import CompetitionNotExistsException from "../../player/domain/exceptions/CompetitionNotExistsException";
import { CompetitionRepository } from "../../competition/domain/repositories/CompetitionRepository";
import ExistsCompetitionByCodeLeague from "../../competition/domain/services/ExistsCompetitionByCodeLeague";
import { Services } from "../../competition/domain/services/models/Services";
import { GetAllByParams, Player } from "../domain/entities/Player";
import { PlayerRepository } from "../domain/repositories/PlayerRepository";

class GetAllBy {
  private readonly _playerRepository: PlayerRepository;
  private readonly _existsCompetitionByCodeLeague: Services;

  constructor(playerRepository: PlayerRepository, competitionRepository: CompetitionRepository) {
    this._playerRepository = playerRepository;
    this._existsCompetitionByCodeLeague = new ExistsCompetitionByCodeLeague(competitionRepository);
  }

  async run(param: GetAllByParams): Promise<Player[] | []> {
    const exists = await this._existsCompetitionByCodeLeague.run(param.codeLeague);

    if (!exists) {
      throw new CompetitionNotExistsException;
    }

    return await this._playerRepository.getAllBy(param);
  }
}

export default GetAllBy;