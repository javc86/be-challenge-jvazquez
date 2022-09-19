import { Request, Response, NextFunction } from 'express';
import GetAllByLeague from '../../../../../modules/player/appication/GetAllByLeague';
import SequelizeDBCompetition from '../../../../implementations/SequelizeDBCompetition';
import SequelizeDBPLayer from '../../../../implementations/SequelizeDBPLayer';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { codeLeague } = req.params;
  const { teamName }: { teamName?: string } = req.query;
  const dbPlayer = new SequelizeDBPLayer();
  const dbCompetition = new SequelizeDBCompetition;
  const getAllByLeague = new GetAllByLeague(dbPlayer, dbCompetition);
  
  try {
    const result = await getAllByLeague.run({
      codeLeague,
      teamName,
    });
    res.json({ players: result });
    return;
  } catch (error) {
    return next(error);
  }
}