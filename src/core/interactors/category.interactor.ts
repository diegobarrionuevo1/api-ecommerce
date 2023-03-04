import { Category } from '../entities/category';
import CategoryRepository from '../repositories/category.repository';

export const createCategoryInteractor =
  (CategoryRepository: CategoryRepository) =>
  async (categoryName: string): Promise<Category> => {
    const newCategory = await CategoryRepository.createCategory(categoryName);
    return newCategory;
  };
