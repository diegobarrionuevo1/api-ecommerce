import { Request, Response, NextFunction } from 'express';
import interactors from '../core/interactors/index';

export const singIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;
  const singInResponse = await interactors.SignInAuthInteractor({
    name,
    email,
    password,
  });
  res.json({ messege: 'success', ...singInResponse });
};

export const logIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  const logInResponse = await interactors.LogInAuthInteractor({
    email,
    password,
  });
  res.json({ messege: 'success', ...logInResponse });
};