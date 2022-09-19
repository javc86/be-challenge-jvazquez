import { Request, Response, NextFunction } from 'express';
import ImportLeague from '../../../../../modules/competition/appication/ImportLeague';
import SequelizeDB from '../../../../implementations/SequelizeDB';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { codeLeague } = req.params;
  const db = new SequelizeDB();
  const importLeague = new ImportLeague(db);
  try {
    const result = await importLeague.run(codeLeague);
    res.json({ success: result });
    return;
  } catch (error) {
    console.log('error', error);
    return next(error);
  }
}