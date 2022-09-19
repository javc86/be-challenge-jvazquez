import { Request, Response, Router, NextFunction } from 'express';
import ExisCompetitionByCodeLeague from '../../../../modules/competition/domain/services/ExistsCompetitionByCodeLeague';
import competitionRoutes from './competition.routes';

const router = Router();

router.use('/competition', competitionRoutes);

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ExisCompetitionByCodeLeague) {
    res.status(400).json({
      error: err.message
    });
  } else {
    next(err);
  }
});

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('Server error:', err);
  res.status(500).json({
    error: err.message
  });
});

export default router;