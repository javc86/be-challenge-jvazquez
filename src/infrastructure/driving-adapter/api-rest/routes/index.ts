import { Request, Response, Router, NextFunction } from 'express';
import CompetitionExistsEception from '../../../../modules/competition/domain/exceptions/CompetitionExistsEception';
import competitionRoutes from './competition.routes';

const router = Router();

router.use('/competition', competitionRoutes);

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('eeeeeee ==>', err);
  if (err instanceof CompetitionExistsEception) {
    res.status(400).json({
      error: err.message
    });
  } else {
    next(err);
  }
});

router.use((err: Error, req: Request, res: Response) => {
  console.log('Server error:', err);
  res.status(500).json({
    error: err.message
  });
});

export default router;