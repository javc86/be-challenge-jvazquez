import { CompetitionRepository } from "../domain/repositories/CompetitionRepository";
import { Services } from "../domain/services/models/Services";
import CompetitionExistsEception from "../domain/exceptions/CompetitionExistsEception";
import ExistsCompetitionByCodeLeague from "../domain/services/ExistsCompetitionByCodeLeague";

class ImportLeague {
  private readonly _competitionRepository: CompetitionRepository;
  private readonly _existsCompetitionByCodeLeague: Services;

  constructor(competitionRepository: CompetitionRepository) {
    this._competitionRepository = competitionRepository;
    this._existsCompetitionByCodeLeague = new ExistsCompetitionByCodeLeague(competitionRepository);
  }

  async run(codeLeague: string): Promise<boolean> {
    console.log('ImportLeague codeLeague', codeLeague);
    const exists = await this._existsCompetitionByCodeLeague.run(codeLeague);
    console.log('exists', exists);

    if (exists) {
      throw new CompetitionExistsEception();
    }

    const result = await this._competitionRepository.importLeague(codeLeague);

    return result;
  }
}

export default ImportLeague;