import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const getProductBySubcat = async (req: Request, res: Response) => {
  try {
    const { subId } = req.params;

    const products = await db.product.getProductsBySubcat(parseInt(subId));

    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(422).json({ message: "worng some" });
  }
};
