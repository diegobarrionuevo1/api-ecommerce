import { Router } from "express";
import categoryRouter from "./category.routes"
import authRouter from './auth.routes';

const router = Router()

router.use("/category", categoryRouter)
router.use("/auth", authRouter)

export default router