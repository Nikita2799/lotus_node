import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";
import { IDataReg } from "../type";
import crypto from "crypto-js";
import config from "../../../../config/config";
import bcryptjs from "bcryptjs";

const db: DatabaseApi = new DatabaseApi();

export const registration = async (req: Request, res: Response) => {
  try {
    const {
      email,
      password,
      firstName,
      surname,
      lastName,
      inviteLink,
      passportData,
      phone,
      balance,
    } = <IDataReg>req.body;

    const hashPassword = await bcryptjs.hash(password, 10);
    const myInviteLink = await createLink(email);
    const parseLeader = await parseLink(inviteLink);

    const param = {
      leaderId: parseLeader,
      firstName,
      surname,
      lastName,
      email,
      phone,
      password: hashPassword,
      myInviteLink,
      passportData,
      balance,
    };

    await db.registration.create(param);

    res.status(201).json({ message: "user created" });
  } catch (err: any) {
    console.log(err, "12");
    if (err.errno === 1062)
      return res.status(422).json({ message: "duplicate login or password" });

    res.status(500).json({ message: "wrong some" });
  }
};

const createLink = async (email: string) => {
  const parseEmail = crypto.AES.encrypt(
    JSON.stringify(email),
    config.security.SECRET!
  ).toString();
  return parseEmail;
};

const parseLink = async (link: string) => {
  const bytes = crypto.AES.decrypt(link, config.security.SECRET!);
  const leader = JSON.parse(bytes.toString(crypto.enc.Utf8));

  return leader;
};
