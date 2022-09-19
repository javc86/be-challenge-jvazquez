import { CompetitionRepository } from "../domain/repositories/CompetitionRepository";
import { Competition } from "../domain/entities/Competition";

class GetAll {
  private readonly _competitionRepository: CompetitionRepository;

  constructor(competitionRepository: CompetitionRepository) {
    this._competitionRepository = competitionRepository;
  }

  async run(): Promise<Competition[] | []> {
    const result = await this._competitionRepository.getAll();
    return result;
  }
}

export default GetAll;