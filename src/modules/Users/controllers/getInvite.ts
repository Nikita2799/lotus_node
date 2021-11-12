import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const getInvite = async (req: Request, res: Response) => {
  try {
    const id = req.user.userId;
    const user: any = await db.user.invite(id);

    res.status(200).json({ invite: user.myInviteLink });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
};
