import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";
import { ILogin } from "../type";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../../../../config/config";

const db: DatabaseApi = new DatabaseApi();

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = <ILogin>req.body;

    //get dataUser by model
    const user: any = await db.login.login(email);

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(422).json({ message: "incorect password" });
    const token = await createToken(user.id);

    res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    if (err.message === "null")
      return res.status(422).json({ message: "user not found" });
    res.status(500).json({ message: "wrong some" });
  }
};

const createToken = async (userId: number) => {
  return jwt.sign({ userId: userId! }, config.security.TOKEN!, {
    expiresIn: "5h",
  });
};
