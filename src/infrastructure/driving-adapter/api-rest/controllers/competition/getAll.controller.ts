import { Request, Response, NextFunction } from 'express';
import GetAll from '../../../../../modules/competition/appication/GetAll';
import SequelizeDBCompetition from '../../../../implementations/SequelizeDBCompetition';

export default async (req: Request, res: Response, next: NextFunction) => {
  const db = new SequelizeDBCompetition();
  const getAll = new GetAll(db);
  try {
    const result = await getAll.run();
    res.json({ competitions: result });
    return;
  } catch (error) {
    return next(error);
  }
}