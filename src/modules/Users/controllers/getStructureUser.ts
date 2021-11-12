import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const getStructureUser = async (req: Request, res: Response) => {
  try {
    //const id = req.user.userId;
    const user: any = await db.user.get(13);

    const myPeople = db.user.getMyPeople(user.email);

    console.log(myPeople);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
};
