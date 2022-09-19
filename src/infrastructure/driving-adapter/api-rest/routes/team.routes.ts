import { Router } from 'express';
import { getAllTeamBy } from '../controllers';

const router = Router();
router.get('/getAllBy', getAllTeamBy);

export default router;