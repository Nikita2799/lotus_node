import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const getSubCategoryByCat = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const answer = await db.category.getSubCategoryByCat(id);

    res.status(200).json(answer);
  } catch (err) {
    console.log(err);
    res.status(422).json({ message: "worng some" });
  }
};
