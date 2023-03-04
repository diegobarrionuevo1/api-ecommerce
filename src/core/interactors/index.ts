import { createCategoryInteractor } from "./category.interactor";
import CategoryDataSource from "../../data/category.datasource";

const categoryRepository = new CategoryDataSource

const CategoryInteractor = createCategoryInteractor(categoryRepository)

const interactors = {
    CategoryInteractor,
}

export default interactors