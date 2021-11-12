import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const postSubCategory = async (req: Request, res: Response) => {
  try {
    const answer = await db.category.addSubCategory(req.body);

    res.status(200).json(answer);
  } catch (err) {
    console.log(err);
    res.status(422).json({ message: "worng some" });
  }
};
