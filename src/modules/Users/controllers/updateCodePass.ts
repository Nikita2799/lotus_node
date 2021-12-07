import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const updateCodePass = async (req: Request, res: Response) => {
  try {
    //const id = req.user.userId;
    const { newPassword, code } = req.body;

    const user = await db.user.changePasswordCode(code, newPassword);

    res.status(200).json();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
};
