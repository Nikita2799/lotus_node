import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";
import { IOrder } from "../type";

const db: DatabaseApi = new DatabaseApi();

export const postOrder = async (req: Request, res: Response) => {
  try {
    const order = <IOrder>req.body;

    const category = await db.order.addOrder(order);

    res.status(200).json(category);
  } catch (err) {
    console.log(err);
    res.status(422).json({ message: "worng some" });
  }
};
