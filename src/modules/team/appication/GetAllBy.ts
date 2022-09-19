import { GetAllByParams, Team } from "../domain/entities/Team";
import { TeamRepository } from "../domain/repositories/TeamRepository";

class GetAllBy {
  private readonly teamRepository: TeamRepository;

  constructor(teamRepository: TeamRepository) {
    this.teamRepository = teamRepository;
  }

  async run(param: GetAllByParams): Promise<Team[] | []> {
    return await this.teamRepository.getAllBy(param);
  }
}

export default GetAllBy;