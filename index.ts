import { staticPlugin } from '@elysiajs/static';
import Elysia from 'elysia';
import renderView from '@/server/render-view';
import App from '@/shared/pages/App';

const app = new Elysia();

const PORT = Bun.env.PORT || 3000;

app.use(staticPlugin({ assets: './static', prefix: '/static' }));
app.use(staticPlugin({ assets: './dist', prefix: '/dist' }));

app.get('/', () => {
  return renderView(App, {}, 'app', 'Starter React');
});

app.get('*', () => {
  return new Response('Not found', { status: 404 });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}...`);
});
