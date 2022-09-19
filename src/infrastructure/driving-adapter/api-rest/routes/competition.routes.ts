import { Router } from 'express';
import { importLeagueController, getAllController } from '../controllers';

const router = Router();

router.post('/:codeLeague', importLeagueController);
router.get('/', getAllController);

export default router;