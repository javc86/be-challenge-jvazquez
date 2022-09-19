import { CompetitionRepository } from "../domain/repositories/CompetitionRepository";
import { Services } from "../domain/services/models/Services";
import ExistsCompetitionByCodeLeague from "../domain/services/ExistsCompetitionByCodeLeague";
import { Competition } from "../domain/entities/Competition";

class GetAll {
  private readonly _competitionRepository: CompetitionRepository;
  private readonly _existsCompetitionByCodeLeague: Services;

  constructor(competitionRepository: CompetitionRepository) {
    this._competitionRepository = competitionRepository;
    this._existsCompetitionByCodeLeague = new ExistsCompetitionByCodeLeague(competitionRepository);
  }

  async run(): Promise<Competition[] | []> {
    const result = await this._competitionRepository.getAll();
    return result;
  }
}

export default GetAll;