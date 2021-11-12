import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await db.product.getAllProducts();

    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(422).json({ message: "worng some" });
  }
};
