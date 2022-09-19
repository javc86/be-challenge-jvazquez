import { Competition } from '../../modules/competition/domain/entities/Competition';
import { CompetitionRepository } from '../../modules/competition/domain/repositories/CompetitionRepository';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import db from '../../db/models';
import fetchApi from '../driving-adapter/api-rest/fetchApi';

class SequelizeDB implements CompetitionRepository {
  importLeague: (codeLeague: string) => Promise<boolean> = async (codeLeague: string) => {
    console.log('codeLeague ==>', codeLeague);
    const result = await fetchApi({
      path: `/competitions/${codeLeague}/teams`,
      method: 'get',
    });

    const newCompetition: Competition = {
      name: result.data?.competition?.name,
      code: result.data?.competition?.code,
      areaName: result.data?.teams[0]?.area?.name,
      Teams: result.data?.teams.map((team: any) => ({
        name: team.name,
        tla: team.tla,
        shortName: team.shortName,
        areaName: team.area.name,
        website: team.website,
        Players: team?.squad.map((player: any) => ({
          name: player.name,
          position: player.position,
          dateOfBirth: player.dateOfBirth,
          countryOfBirth: player.nationality,
          nationality: player.nationality,
        })),
      })),
    };

    try {
      const competition = await db.Competition.create(newCompetition);

      newCompetition.Teams.forEach(async newTeam => {
        const team = await db.Team.create({
          ...newTeam,
          competitionId: competition.id,
        });
        newTeam.Players.forEach(async newPlayer => {
          await db.Player.create({
            ...newPlayer,
            teamId: team.id,
          });
        });
      });

      return true;
    } catch (error) {
      console.log('Error db:', error);
      throw error;
    }
  };

  getByCodeLeague: (codeLeague: string) => Promise<Competition | null> = async (codeLeague) => {
    console.log('codeLeague result ==>', codeLeague);
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