import axios from 'axios';
import type { NextFunction, Request, Response } from 'express';
import EQueryKeys from '@/shared/queries/query-keys';

const getCurrentUser = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.cookies.session) {
    next();
    return;
  }

  try {
    const { data } = await axios.get(`${process.env.BACKEND_URL}/api/v1/auth/user`, {
      headers: { session: req.cookies.session },
    });

    const { id, email } = data as PFYUser;

    req.user = { id, email };
    res.queries[EQueryKeys.User] = req.user;
  } catch (e) {
    console.error('Error: Fetching data from current user', e);
  } finally {
    next();
  }
};

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    res.redirect('/login');
  } else {
    next();
  }
};

const requireGuest = (req: Request, res: Response, next: NextFunction) => {
  if (req.user) {
    res.redirect('/dashboard');
  } else {
    next();
  }
};

export default { getCurrentUser, requireAuth, requireGuest };
