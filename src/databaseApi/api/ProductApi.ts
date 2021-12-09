import { raw } from "body-parser";
import { QueryTypes, Sequelize } from "sequelize";
import { IProduct } from "../../modules/Product/type";
import { Img } from "../model/Img";
import { Product } from "../model/Product";
import { User } from "../model/User";

export class ProductApi {
  constructor(private readonly connection: Sequelize) {}

  async addProduct(product: IProduct) {
    const productAnswer = await Product.create(product);
    if (!productAnswer) throw new Error("product err");
    return productAnswer;
  }

  async addProductImg(productId: any, srcName: string) {
    const productAnswer = await Img.create({
      productId: productId,
      src: srcName,
    });
    if (!productAnswer) throw new Error("product err");
    return productAnswer;
  }

  async getAllProductsArray(products: Array<any>) {
    let sortProduct = [];
    for (let i = 0; i < products.length; i++) {
      const productAnswer: any = await Product.sequelize?.query(
        `SELECT price,discount,name,src FROM products as p INNER JOIN imgProducts ON p.id=imgProducts.productId WHERE p.id = ${products[i]}`,
        {
          type: QueryTypes.SELECT,
        }
      );
      sortProduct.push({ ...productAnswer[0], id: products[i] });
    }

    return sortProduct;
  }
  async getAllProducts() {
    const productAnswer = await Product.sequelize?.query(
      "SELECT * FROM products as p INNER JOIN imgProducts ON p.id=imgProducts.productId",
      {
        type: QueryTypes.SELECT,
      }
    );
    console.log(productAnswer);

    if (!productAnswer) throw new Error("product err");
    return productAnswer;
  }

  async getProductsBySubcat(subId: number) {
    const productAnswer = await Product.sequelize?.query(
      `SELECT * FROM products as p INNER JOIN imgProducts ON p.id=imgProducts.productId WHERE p.subcategory=${subId}`,
      {
        type: QueryTypes.SELECT,
      }
    );
    console.log(productAnswer);

    if (!productAnswer) throw new Error("product err");
    return productAnswer;
  }

  async getCategory(category: number) {
    const productAnswer = await Product.sequelize?.query(
      `SELECT * FROM products as p INNER JOIN imgProducts ON p.id=imgProducts.productId WHERE p.category=${category}`,
      {
        type: QueryTypes.SELECT,
      }
    );
    console.log(productAnswer);

    if (!productAnswer) throw new Error("product err");
    return productAnswer;
  }

  async getProductsById(productId: number) {
    const productAnswer = await Product.sequelize?.query(
      `SELECT * FROM products as p INNER JOIN imgProducts ON p.id=imgProducts.productId WHERE p.id = ${productId}`,
      {
        type: QueryTypes.SELECT,
      }
    );
    console.log(productAnswer);

    if (!productAnswer) throw new Error("product err");
    return productAnswer;
  }

  // async updateProduct(productId: number) {}
}
