// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import db from '../../db/models';
import { GetAllByParams, Player } from '../../modules/player/domain/entities/Player';
import { PlayerRepository } from '../../modules/player/domain/repositories/PlayerRepository';
import sequelize from 'sequelize';

class SequelizeDBPLayer implements PlayerRepository {
  getAllBy: (params: GetAllByParams) => Promise<Player[] | []> = async (params) => {
    let whereTeam = {};
    const Op = sequelize.Op;

    if (params.teamName) {
      whereTeam = {
        name: {
          [Op.like]: `%${params.teamName}%`,
        },
      }
    }

    try {
      const players = await db.Player.findAll({
        attributes: ['id', 'name', 'position', 'dateOfBirth', 'countryOfBirth', 'nationality'],
        include: [
          {
            model: db.Team,
            as: 'Team',
            attributes: ['id', 'name', 'tla', 'shortName', 'areaName', 'website'],
            where: whereTeam,
            include:  [
              {
                model: db.Competition,
                as: 'Competition',
                attributes: ['id', 'code', 'name', 'areaName'],
                where: {
                  code: params.codeLeague,
                },
              }
            ]
          }
        ] 
      });

      return players;
    } catch (error) {
      console.log('Error db:', error);
      throw error;
    }
  };
}

export default SequelizeDBPLayer;