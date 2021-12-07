import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const changePasswordForPassword = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.user.userId;
    const { newPassword, oldPassword } = req.body;

    const user = await db.user.changePassword(id, oldPassword, newPassword);

    res.status(200).json("ok");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
};
