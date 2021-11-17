import { Sequelize } from "sequelize";
import { User } from "../model/User";

export class UserApi {
  constructor(private readonly connection: Sequelize) {}

  public async get(id: any) {
    const result = await User.findOne({
      where: { id: id },
      raw: false,
    });
    console.log(result);

    if (result === null) throw new Error("null");
    const leader = await User.findOne({
      where: { email: result.getDataValue("leaderId") },
      attributes: ["firstName", "lastName", "surname", "email"],
    });
    return [result, leader];
  }

  public async getMyPeople(email: string) {
    const result = await User.findAll({
      where: { leaderId: email },
      attributes: ["id", "firstName", "lastName", "surname"],
      raw: true,
    });
    return result;
  }

  public async getCountMyPeople(email: string) {
    const result = await User.count({
      where: { leaderId: email },
    });
    return result;
  }

  public async invite(id: any) {
    const result = await User.findOne({ where: { id }, raw: true });
    if (result === null) throw new Error("null");
    return result;
  }

  public async update(date: any, id: any) {
    const result = await User.update({ date }, { where: { id } });
    if (result === null) throw new Error("null");
    return result;
  }
}
