import mysql from "mysql";
import config from "../../../config/config";
import jwt from "jsonwebtoken";
import { Sequelize } from "sequelize/types";
import { User } from "../model/User";

export class RegistrationApi {
  constructor(private readonly connection: Sequelize) {}

  private createLink() {}

  public async create(param: any) {
    const result = await User.create(param);
    //const dataGrupe = await
    return result;
  }

  public async check(code: any) {
    const result = await User.findOne({
      where: { myInviteLink: code },
      raw: true,
    });
    if (result === null) throw new Error("null");
    return;
  }
}
