import { Router } from 'express';
import { getAllPlayerByController } from '../controllers';

const router = Router();

router.get('/getAllBy/:codeLeague', getAllPlayerByController);
// router.get('/getAllByTeamName/:teamName', () => {});

export default router;