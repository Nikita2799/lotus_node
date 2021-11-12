import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const getCategory = async (req: Request, res: Response) => {
  try {
    const category = await db.category.getCategory();

    res.status(200).json(category);
  } catch (err) {
    console.log(err);
    res.status(422).json({ message: "worng some" });
  }
};
