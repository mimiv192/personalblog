import {Router} from 'express';

import loginRouter from './login';
let router = Router();


router.use('/login', loginRouter);

export default router;

