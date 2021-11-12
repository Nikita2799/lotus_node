import { raw } from "body-parser";
import { Sequelize } from "sequelize/types";
import { IProduct } from "../../modules/Product/type";
import { Img } from "../model/Img";
import { Product } from "../model/Product";

export class ProductApi {
  constructor(private readonly connection: Sequelize) {}

  async addProduct(product: IProduct) {
    const productAnswer = await Product.create(product);
    if (!productAnswer) throw new Error("product err");
    return productAnswer;
  }

  async addProductImg(productId: any, srcName: string) {
    const productAnswer = await Img.create({ productId, src: srcName });
    if (!productAnswer) throw new Error("product err");
    return productAnswer;
  }

  async getAllProducts() {
    const productAnswer = await Product.findAll();
    if (!productAnswer) throw new Error("product err");
    return productAnswer;
  }

  async getProductsBySubcat(subId: number) {
    const productAnswer = await Product.findAll({
      where: { subcategoryId: subId },
    });
    if (!productAnswer) throw new Error("product err");
    return productAnswer;
  }

  async getProductsById(productId: number) {
    const productAnswer = await Product.findOne({
      where: { id: productId },
      raw: true,
    });
    if (!productAnswer) throw new Error("product err");
    return productAnswer;
  }

  async updateProduct(productId: number) {}
}
