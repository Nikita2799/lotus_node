import { Sequelize } from "sequelize";
import { User } from "../model/User";
import bcrypt from "bcryptjs";

export class UserApi {
  constructor(private readonly connection: Sequelize) {}

  public async changePassword(
    id: any,
    oldPassword: string,
    newPassword: string
  ) {
    const result = await User.findOne({
      where: { id: id },
      attributes: ["password"],
      raw: false,
    });
    const hashPassword = await bcrypt.hash(oldPassword, 10);
    const isMatch = await bcrypt.compare(
      hashPassword,
      result?.getDataValue("password")
    );

    if (!isMatch) throw new Error("incorrect pass");

    const hashNewPassword = await bcrypt.hash(newPassword, 10);
    await User.update({ password: hashNewPassword }, { where: { id: id } });

    return result;
  }

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
