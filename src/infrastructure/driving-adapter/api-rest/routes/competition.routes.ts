import { Router } from 'express';
import { importLeagueController, getAllCompetitionController } from '../controllers';

const router = Router();

router.post('/importLeague/:codeLeague', importLeagueController);
router.get('/getAll', getAllCompetitionController);

export default router;