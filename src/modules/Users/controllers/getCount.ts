import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const getCount = async (req: Request, res: Response) => {
  try {
    //const id = req.user.userId;
    const { id } = req.params;

    const user = await db.user.get(id);

    const myPeople = await db.user.getCountMyPeople(
      user[0]?.getDataValue("email")
    );

    res.status(200).json(myPeople);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
};
