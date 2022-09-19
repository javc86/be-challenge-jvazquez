import { Request, Response, NextFunction } from 'express';
import GetAllBy from '../../../../../modules/team/appication/GetAllBy';
import SequelizeDBTeam from '../../../../implementations/SequelizeDBTeam';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { teamName }: { teamName?: string } = req.query;
  const dbTeam = new SequelizeDBTeam();
  const getAllBy = new GetAllBy(dbTeam);
  
  try {
    const result = await getAllBy.run({
      teamName,
    });
    res.json({ players: result });
    return;
  } catch (error) {
    return next(error);
  }
}