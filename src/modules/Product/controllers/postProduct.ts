import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";
import { IProduct } from "../type";

const db: DatabaseApi = new DatabaseApi();

export const postProduct = async (req: Request, res: Response) => {
  try {
    const product = <IProduct>req.body;
    await db.product.addProduct(product);

    res.status(200).json("success");
  } catch (err) {
    console.log(err);
    res.status(422).json({ message: "worng some" });
  }
};
