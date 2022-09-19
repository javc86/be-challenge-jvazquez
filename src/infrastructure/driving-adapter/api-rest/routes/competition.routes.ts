import { Router } from 'express';
import { importLeagueController, getAllController } from '../controllers';

const router = Router();

router.post('/importLeague/:codeLeague', importLeagueController);
router.get('/getAll', getAllController);

export default router;