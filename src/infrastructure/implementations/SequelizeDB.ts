import { Competition } from '../../modules/competition/domain/entities/Competition';
import { CompetitionRepository } from '../../modules/competition/domain/repositories/CompetitionRepository';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import db from '../../db/models';

class SequelizeDB implements CompetitionRepository {
  importLeague: (codeLeague: string) => Promise<boolean> = async (codeLeague: string) => {
    console.log('codeLeague ==>', codeLeague);
    return true;
  };

  getByCodeLeague: (codeLeague: string) => Promise<Competition | null> = async (codeLeague) => {
    try {
      const competition = await db.Competition.findOne({
        where: {
          code: codeLeague
        }
      });

      return competition;
    } catch (error) {
      console.log('Error db:', error);
    }
  };

  getAll: () => Promise<Competition[] | []> = async () => {
    try {
      const competitions = await db.Competition.findAll();

      return competitions;
    } catch (error) {
      console.log('Error db:', error);
    }
  };
}

export default SequelizeDB;