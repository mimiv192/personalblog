import { Router } from 'express';
import usersRouter from './users';

import blogsRouter from './blogs';

let router = Router();

router.use('/blogs', blogsRouter);
router.use('/users', usersRouter);
export default router;