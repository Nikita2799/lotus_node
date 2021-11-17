import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";
import { IDataReg } from "../type";
import crypto from "crypto-js";
import config from "../../../../config/config";
import bcryptjs from "bcryptjs";

const db: DatabaseApi = new DatabaseApi();

export const registration = async (req: Request, res: Response) => {
  try {
    const { email, password, name, surname, lastName, inviteLink, sex, phone } =
      <IDataReg>req.body;
    console.log(req.body);

    const hashPassword = await bcryptjs.hash(password, 10);
    const myInviteLink = await createLink(email);
    const parseLeader = await parseLink(inviteLink);

    const param = {
      leaderId: "",
      firstName: name,
      surname,
      lastName,
      email,
      phone,
      passportData: " ",
      password: hashPassword,
      myInviteLink: myInviteLink,
      sex,
      balance: 0,
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
  const parseEmail = encodeURIComponent(
    crypto.AES.encrypt(email, config.security.SECRET!).toString()
  );
  return parseEmail;
};

const parseLink = async (link: string) => {
  const decode = decodeURIComponent(link);
  const bytes = crypto.AES.decrypt(decode, config.security.SECRET!);
  const leader = bytes.toString(crypto.enc.Utf8);

  return leader;
};
