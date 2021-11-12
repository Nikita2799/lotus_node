import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const checkInviteCode = async (req: Request, res: Response) => {
  try {
    const { code } = req.body;
    console.log(req.body);

    await db.registration.check(code);
    res.status(200).json("OK");
  } catch (err: any) {
    console.log(err);
    if (err.message === "null")
      return res.status(422).json({ message: "incorect invite code" });
    res.status(500).json({ message: "server error" });
  }
};
