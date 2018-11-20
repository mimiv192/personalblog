import { Router } from 'express';
import {tokenMiddleware, isLoggedIn} from '../middleware/auth.mw';
import apiRouter from './api';
import authRouter from './auth';
let router = Router();

router.use('/auth', authRouter);

router.route('*')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);


router.use('/api', apiRouter);
export default router;