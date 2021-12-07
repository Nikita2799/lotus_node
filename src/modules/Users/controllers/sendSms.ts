import axios from "axios";
import { Request, Response } from "express";
import config from "../../../../config/config";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const sendSms = async (req: Request, res: Response) => {
  try {
    //const id = req.user.userId;
    const { phone, message } = req.body;

    //const code = await db.user.findUserPhone(phone);
    const sortPhone = phone.replace(/[^\d]/g, "");
    //https://api.mobizon.ua/service/message/sendsmsmessage?recipient=NNNNNNNNNNN&from=PPPPPPP&text=Message+text+here%21&apiKey=KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
    const answer = await axios.get(
      `https://api.mobizon.ua/service/message/sendsmsmessage?recipient=${sortPhone}&text=${message}&apiKey=${config.security.API}`
    );
    console.log(answer.data);

    res.status(200).json("code submit");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
};
