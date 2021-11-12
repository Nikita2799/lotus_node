import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await db.product.getProductsById(parseInt(id));

    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(422).json({ message: "worng some" });
  }
};
