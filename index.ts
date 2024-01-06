import cookieParser from 'cookie-parser';
import express from 'express';
import favicon from 'serve-favicon';
import deviceMiddleware from '@/server/middleware/device';
import renderMiddleware from '@/server/middleware/render';
import apiRouter from '@/server/routers/api-router';
import appRouter from '@/server/routers/app-router';

const PORT = Bun.env.PORT || 3000;
const IS_PROD = Bun.env.NODE_ENV === 'production';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(favicon('static/favicon.ico'));

app.use('/static', express.static('static/'));
app.use('/dist', express.static('dist/'));

if (IS_PROD) {
  app.use((await import('compression')).default());
}

app.use(renderMiddleware);
app.use(deviceMiddleware);

app.use('/api', apiRouter);

app.use('/', appRouter);

app.use((req, res) => {
  res.send('Error 404: Page not found');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}...`);
});
