import type { NextFunction, Request, Response } from 'express';
import App from '@/shared/pages/App';
import EQueryKeys from '@/shared/queries/query-keys';

const fetch = async (req: Request, res: Response, next: NextFunction) => {
  next();
};

const render = (req: Request, res: Response) => {
  res
    .loadQueryKeys([EQueryKeys.User])
    .renderView(
      App,
      { initialState: res.locals.initialState, device: req.device },
      { title: 'Packlify', bundleName: 'app', withRouter: true }
    );
};

export default { render, fetch };
