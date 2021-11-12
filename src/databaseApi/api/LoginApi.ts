import mysql from "mysql";
import config from "../../../config/config";
import jwt from "jsonwebtoken";
import { Sequelize } from "sequelize/types";
import { User } from "../model/User";

export class LoginApi {
  constructor(private readonly connection: Sequelize) {}

  public async login(email: any) {
    const result = await User.findOne({ where: { email }, raw: true });
    if (result === null) throw new Error("null");
    return result;
  }
}
