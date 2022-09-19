import { Request, Response, Router, NextFunction } from 'express';
import CompetitionExistsEception from '../../../../modules/competition/domain/exceptions/CompetitionExistsException';
import CompetitionNotExistsException from '../../../../modules/player/domain/exceptions/CompetitionNotExistsException';
import competitionRoutes from './competition.routes';
import playerRoutes from './player.routes';

const router = Router();

router.use('/competition', competitionRoutes);
router.use('/player', playerRoutes);

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CompetitionExistsEception || err instanceof CompetitionNotExistsException ) {
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