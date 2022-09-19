import { Request, Response, NextFunction } from 'express';
import GetAllBy from '../../../../../modules/player/appication/GetAllBy';
import SequelizeDBCompetition from '../../../../implementations/SequelizeDBCompetition';
import SequelizeDBPLayer from '../../../../implementations/SequelizeDBPLayer';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { codeLeague } = req.params;
  const { teamName }: { teamName?: string } = req.query;
  const dbPlayer = new SequelizeDBPLayer();
  const dbCompetition = new SequelizeDBCompetition;
  const getAllBy = new GetAllBy(dbPlayer, dbCompetition);
  
  try {
    const result = await getAllBy.run({
      codeLeague,
      teamName,
    });
    res.json({ players: result });
    return;
  } catch (error) {
    return next(error);
  }
}