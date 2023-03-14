import { createCategoryInteractor } from "./category.interactor";
import CategoryDataSource from "../../data/category.datasource";
import { loginAuthInteractor, signInAuthInteractor } from './auth.interactor';
import AuthDataSource from "../../data/auth.datasourse";


//Repositories

const categoryRepository = new CategoryDataSource
const authRepository = new AuthDataSource


//Interactors
const CategoryInteractor = createCategoryInteractor(categoryRepository)
const LogInAuthInteractor = loginAuthInteractor(authRepository)
const SignInAuthInteractor = signInAuthInteractor(authRepository)



const interactors = {
    CategoryInteractor,
    LogInAuthInteractor,
    SignInAuthInteractor
}

export default interactors