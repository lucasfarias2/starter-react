/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextFunction, Request, Response } from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import serialize from 'serialize-javascript';
import getTemplate from '@/server/template';

const renderViewMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.renderView = async (
    Component: React.FunctionComponent<any> | React.ComponentClass<any>,
    props: any,
    { title, withRouter = false, bundleName }: TRenderViewProps
  ) => {
    try {
      const url = req.originalUrl;

      const component = <Component {...props} />;

      const stream = withRouter
        ? renderToString(<StaticRouter location={url}>{component}</StaticRouter>)
        : renderToString(component);

      const template = getTemplate(title, bundleName);

      const serializedData = serialize(props, { isJSON: true });

      res
        .status(200)
        .set({ 'Content-Type': 'text/html' })
        .end(
          template
            .replace('<!-- react -->', stream)
            .replace('// preloaded-state', `window.__PRELOADED_STATE__ = ${serializedData}`)
        );
    } catch (e) {
      const error = e as Error;

      console.log(error.stack);
      res.status(500).end(error.stack);
    }
  };

  next();
};

export default renderViewMiddleware;
