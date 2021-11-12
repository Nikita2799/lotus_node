import { Sequelize } from "sequelize/types";
import { Category } from "../model/Category";
import { SubCat } from "../model/SubCat";
import { User } from "../model/User";

export class CategoryApi {
  constructor(private readonly connection: Sequelize) {}

  async addCategory(category: object) {
    const answer = await Category.create(category);
    if (!answer) throw new Error("cat err");

    return answer;
  }

  async addSubCategory(subcategory: object) {
    const answer = await SubCat.create(subcategory);
    if (!answer) throw new Error("cat err");

    return answer;
  }

  async getCategory() {
    const answer = await Category.findAll({ attributes: ["name", "id"] });
    if (!answer) throw new Error("cat err");

    return answer;
  }

  async getSubCategoryByCat(idCat: any) {
    const answer = await SubCat.findAll({
      where: { categoryId: idCat },
      attributes: ["name", "id"],
    });
    if (!answer) throw new Error("cat err");

    return answer;
  }
}
