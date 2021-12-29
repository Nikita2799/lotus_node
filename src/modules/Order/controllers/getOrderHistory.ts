import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";
import { IOrder } from "../type";

const db: DatabaseApi = new DatabaseApi();

export const getOrderHistory = async (req: Request, res: Response) => {
  try {
    const id = req.user.userId;

    const orders = await db.order.getHistory(id);

    res.status(200).json(orders);
  } catch (err) {
    console.log(err);
    res.status(422).json({ message: "worng some" });
  }
};
