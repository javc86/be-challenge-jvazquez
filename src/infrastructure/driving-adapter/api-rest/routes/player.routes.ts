import { Router } from 'express';
import { getAllPlayerByLeague, getAllPlayerBy } from '../controllers';

const router = Router();

router.get('/getAllByLeague/:codeLeague', getAllPlayerByLeague);
router.get('/getAllBy', getAllPlayerBy);

export default router;