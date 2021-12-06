import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";
import jwt from "jsonwebtoken";
import config from "../../../../config/config";

const db: DatabaseApi = new DatabaseApi();

export const login_admin = async (req: Request, res: Response) => {
  try {
    const { login, password } = req.body;

    if (login !== "admin-lotus-namste") {
      return res.status(422).json({ message: "incorect data" });
    }
    if (password !== "123qwedsa") {
      return res.status(422).json({ message: "incoert data" });
    }

    const token = await createToken(login);

    res.status(200).json({ token });
  } catch (err: any) {
    console.log(err);
    if (err.message === "null")
      return res.status(422).json({ message: "user not found" });
    res.status(500).json({ message: "wrong some" });
  }
};

const createToken = async (userId: number | string) => {
  return jwt.sign({ userId: userId! }, config.security.TOKEN!, {
    expiresIn: "30d",
  });
};
