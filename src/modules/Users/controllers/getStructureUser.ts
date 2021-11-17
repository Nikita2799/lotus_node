import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const getStructureUser = async (req: Request, res: Response) => {
  try {
    const idUser = req.user.userId;

    const { id } = req.params;

    const user = await db.user.get(id === "0" ? idUser : id);

    const myPeople = await db.user.getMyPeople(user[0]?.getDataValue("email"));

    res.status(200).json(myPeople);
  } catch (err) {
    console.log(err);
    res.status(422).json({ message: "server error" });
  }
};
