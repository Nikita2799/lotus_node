import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const changePasswordForPassword = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.user.userId;
    const { oldPassword, newPassword } = req.params;

    const user = await db.user.changePassword(id, oldPassword, newPassword);

    res.status(200).json();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
};
