import { Request, Response, Router, NextFunction } from 'express';
import CompetitionExistsEception from '../../../../modules/competition/domain/exceptions/CompetitionExistsException';
import CompetitionNotExistsException from '../../../../modules/player/domain/exceptions/CompetitionNotExistsException';
import competitionRoutes from './competition.routes';
import playerRoutes from './player.routes';
import teamRoutes from './team.routes';

const router = Router();

router.use('/competition', competitionRoutes);
router.use('/player', playerRoutes);
router.use('/team', teamRoutes);

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CompetitionExistsEception || err instanceof CompetitionNotExistsException ) {
    res.status(400).json({
      error: err.message
    });
  } else if (err instanceof Error) {
    res.status(500).json({
      error: 'Internal Server Error'
    });
  } else {
    next();
  }
});

router.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not found'
  });
});

export default router;