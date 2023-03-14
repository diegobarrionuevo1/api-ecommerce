export interface AuthLogin {
  email: string;
  password: string;
}

export interface AuthSignIn {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  userId: number;
  email: string;
  name: string;
  token: string;
  expiresIn: number;
}
