import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const postCategory = async (req: Request, res: Response) => {
  try {
    //const {}
    const products = await db.category.addCategory(req.body);

    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(422).json({ message: "worng some" });
  }
};
