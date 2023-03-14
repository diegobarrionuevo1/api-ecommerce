import { Router } from "express";
import { singIn, logIn } from '../controllers/auth.controller';

const authRouter = Router()

authRouter.post("/singin", singIn)
authRouter.post("/login", logIn)

export default authRouter
