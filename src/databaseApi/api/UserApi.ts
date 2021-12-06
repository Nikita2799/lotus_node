import { Sequelize } from "sequelize";
import { User } from "../model/User";
import bcrypt from "bcryptjs";
import { CodePhones } from "../model/CodePhones";
import jwt from "jsonwebtoken";
import config from "../../../config/config";

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
    const hashPassword = await bcrypt.hash(newPassword, 10);
    const isMatch = await bcrypt.compare(
      oldPassword,
      result?.getDataValue("password")
    );

    if (!isMatch) throw new Error("incorrect pass");

    //const hashNewPassword = await bcrypt.hash(newPassword, 10);
    await User.update({ password: hashPassword }, { where: { id: id } });

    return result;
  }

  public async changePasswordCode(
    code: any,

    newPassword: string
  ) {
    const result = await CodePhones.findOne({
      where: { code: code },
      attributes: ["userId"],
      raw: false,
    });

    if (!result) throw new Error("null user");
    const hashPassword = await bcrypt.hash(newPassword, 10);

    //const hashNewPassword = await bcrypt.hash(newPassword, 10);
    await User.update(
      { password: hashPassword },
      { where: { id: result.getDataValue("userId") } }
    );

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

  public async findUserPhone(phone: string) {
    const result = await User.findOne({
      where: { phone: phone },
      raw: false,
      attributes: ["id"],
    });
    console.log(result);

    if (result === null || !result) throw new Error("null");
    const code = Math.floor(Math.random() * 10000) + 1;
    const res = await CodePhones.create(
      { userId: result.getDataValue("id"), code: code },
      { raw: false }
    );
    console.log(res);

    return code;
  }

  public async checkCode(code: string | number) {
    const userId = await CodePhones.findOne({
      where: { code: code },
      attributes: ["userId"],
    });
    if (!userId || userId === null) throw new Error("null");

    const token = jwt.sign(
      { userId: userId.getDataValue("userId")! },
      config.security.TOKEN!,
      {
        expiresIn: "5h",
      }
    );
    await CodePhones.destroy({ where: { code: code } });
    return token;
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
