import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const postProductImg = async (req: Request, res: Response) => {
  try {
    const { productId, src } = req.body;

    const answer = await db.product.addProductImg(productId, src);

    res.status(200);
  } catch (err) {
    console.log(err);
    res.status(422).json({ message: "worng some" });
  }
};
