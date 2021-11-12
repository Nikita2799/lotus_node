import { Sequelize } from "sequelize";
import { User } from "../model/User";

export class UserApi {
  constructor(private readonly connection: Sequelize) {}

  public async get(id: any) {
    const result = await User.findOne({
      where: { id },
      raw: false,
    });
    console.log(result);

    if (result === null) throw new Error("null");
    const leader = await User.findOne({
      where: { email: result.getDataValue("leaderId") },
      attributes: ["firstName", "lastName", "surname"],
    });
    return [result, leader];
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
