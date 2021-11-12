import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const getUserByToken = async (req: Request, res: Response) => {
  try {
    const id = req.user.userId;
    const user: any = await db.user.get(id);

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    if (err === null)
      return res.status(422).json({ message: "user not found" });
    res.status(500).json({ message: "server error" });
  }
};
