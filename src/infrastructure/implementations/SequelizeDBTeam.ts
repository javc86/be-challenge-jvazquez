// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import db from '../../db/models';
import { GetAllByParams, Team } from '../../modules/team/domain/entities/Team';
import sequelize from 'sequelize';
import { TeamRepository } from '../../modules/team/domain/repositories/TeamRepository';

class SequelizeDBPLayer implements TeamRepository {
  getAllBy: (param: GetAllByParams) => Promise<Team[] | []> = async (params) => {
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
      const teams = await db.Team.findAll({
        attributes: ['id', 'name', 'tla', 'shortName', 'areaName', 'website'],
        where: whereTeam,
      });

      return teams;
    } catch (error) {
      console.log('Error db:', error);
      throw error;
    }
  };
}

export default SequelizeDBPLayer;