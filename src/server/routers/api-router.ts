import express from 'express';
import authController from '@/server/controllers/api/auth-controller';

const apiRouter = express.Router();

apiRouter.post('/auth/login', authController.login);

apiRouter.use('*', (_req, res) => {
  res.send('Error 404: Page not found');
});

export default apiRouter;
