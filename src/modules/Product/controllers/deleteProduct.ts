import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const deleteProduct = (req: Request, res: Response) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(422).json({ message: "worng some" });
  }
};
