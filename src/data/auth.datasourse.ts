import AuthRepository from '../core/repositories/auth.repository';
import { AuthLogin, AuthResponse, AuthSignIn } from '../core/entities/auth';
import { User } from '@prisma/client';
import prisma from '../config/db';
import { sign } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

export default class AuthDataSource implements AuthRepository {
  public async logIn(data: AuthLogin): Promise<AuthResponse | null> {
    
    // Check that the user does not exist in the db
    const existUser = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (!existUser) {
      return null;
    }

    const isMatch =await this.mathPassword(existUser, data.password)

    if (!isMatch){
        return null
    }
    const token = this.getSignedToken(existUser);

    return {
      userId: existUser.id,
      email: existUser.email,
      name: existUser.name,
      token,
      expiresIn: 60 * 60 * 1000,
    };
  }

  public async signIn(data: AuthSignIn): Promise<AuthResponse | null> {
    // Check that the user does not exist in the db
    const existUser = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (existUser) {
      return null;
    }

    //Create a password hash

    const salt = await bcrypt.genSalt(10);
    let hashPassword = await bcrypt.hash(data.password, salt);

    //Crear User
    const user = await prisma.user.create({
      data: { name: data.email, email: data.email, password: hashPassword },
    });

    const token = this.getSignedToken(user);
    return {
      userId: user.id,
      email: user.email,
      name: user.name,
      token,
      expiresIn: 60 * 60 * 1000,
    };
  }

  private getSignedToken(user: User): string {
    return sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: process.env.JWT_EXPIRE!,
    });
  }
  private async mathPassword(user:User,password: string):Promise<boolean>{
    return await bcrypt.compare(password,user.password)
  }
}
