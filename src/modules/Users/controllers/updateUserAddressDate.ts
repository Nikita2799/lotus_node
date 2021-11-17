import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const updateUserAddress = async (req: Request, res: Response) => {
  try {
    const userId = req.user.userId;
    const userData = req.body;

    await db.user.update(userData, userId);

    res.status(200).json("updated");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
};
