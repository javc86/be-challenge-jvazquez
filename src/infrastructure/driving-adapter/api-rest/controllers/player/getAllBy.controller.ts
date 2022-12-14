import { Request, Response, NextFunction } from 'express';
import GetAllBy from '../../../../../modules/player/appication/GetAllBy';
import SequelizeDBPLayer from '../../../../implementations/SequelizeDBPLayer';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { teamName }: { teamName?: string } = req.query;
  const dbPlayer = new SequelizeDBPLayer();
  const getAllBy = new GetAllBy(dbPlayer);
  
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