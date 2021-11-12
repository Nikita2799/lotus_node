import { Sequelize } from "sequelize/types";
import { User } from "../model/User";

export class UserApi {
  constructor(private readonly connection: Sequelize) {}

  public async get(id: any) {
    const result = await User.findOne({ where: { id }, raw: true });
    if (result === null) throw new Error("null");
    return result;
  }

  public async getMyPeople(email: string) {
    const result = await User.findAll({
      where: { leaderId: email },
      raw: true,
    });
    return result;
  }

  public async invite(id: any) {
    const result = await User.findOne({ where: { id }, raw: true });
    if (result === null) throw new Error("null");
    return result;
  }
}
