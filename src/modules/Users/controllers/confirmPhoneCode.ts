import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const confirmPhoneCode = async (req: Request, res: Response) => {
  try {
    //const id = req.user.userId;
    const { code } = req.body;

    const token = await db.user.checkCode(code);
    res.status(200).json(token);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
};
