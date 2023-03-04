import { Request, Response } from "express";
import interactors from "../core/interactors";

export const createCategory = async (req:Request, res:Response) => {
    const {categoryName}= req.body
    const category = await interactors.CategoryInteractor(categoryName)
    res.json(category)   
}