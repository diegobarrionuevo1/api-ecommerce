import { AuthLogin,AuthResponse,AuthSignIn } from "../entities/auth";

export default interface AuthRepository{
    logIn(logIn:AuthLogin):Promise<AuthResponse|null>
    signIn(singIn:AuthSignIn):Promise<AuthResponse|null>
}