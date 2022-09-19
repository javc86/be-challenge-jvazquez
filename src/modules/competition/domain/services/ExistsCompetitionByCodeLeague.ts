import { CompetitionRepository } from "../repositories/CompetitionRepository";
import { Services } from "./models/Services";

class ExistsCompetitionByCodeLeague implements Services {
  private readonly _competitionRepository: CompetitionRepository;

  constructor(competitionRepository: CompetitionRepository) {
    this._competitionRepository = competitionRepository;  
  }

  async run(codeLeague: string): Promise<boolean> {
    const competition = await this._competitionRepository.getByCodeLeague(codeLeague);
    if (competition) return true;
    return false;
  }
}

export default ExistsCompetitionByCodeLeague;