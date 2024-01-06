import express from 'express';
import app from '@/server/controllers/app/app-controller';
import auth from '@/server/middleware/auth';
import withQueryMiddleware from '@/server/middleware/with-query';

const appRouter = express.Router();

appRouter.use(withQueryMiddleware);

appRouter.get('/', auth.getCurrentUser, app.fetch, app.render);

export default appRouter;
