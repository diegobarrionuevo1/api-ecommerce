import AuthRepository from '../repositories/auth.repository';
import { AuthLogin, AuthResponse, AuthSignIn } from '../entities/auth';

export const loginAuthInteractor =
  (authRepository: AuthRepository) =>
  async (dataLogin: AuthLogin): Promise<AuthResponse | null> => {
    const authRes = await authRepository.logIn(dataLogin);
    return authRes;
  };

export const signInAuthInteractor =
  (AuthRepository: AuthRepository) =>
  async (dataSignIn: AuthSignIn): Promise<AuthResponse | null> => {
    const authRes = await AuthRepository.signIn(dataSignIn);
    return authRes;
  };

