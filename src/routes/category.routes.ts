import { Router } from "express";
import {createCategory} from "../controllers/category.controller"

const categotyRouter = Router()

categotyRouter.post("/", createCategory)

export default categotyRouter
