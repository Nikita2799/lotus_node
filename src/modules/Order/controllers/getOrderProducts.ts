import { Request, Response } from "express";
import { DatabaseApi } from "../../../databaseApi/DatabaseApi";
import { IOrder } from "../type";

const db: DatabaseApi = new DatabaseApi();

export const getOrderProducts = async (req: Request, res: Response) => {
  try {
    //const order = <IOrder>req.body;
    const { orderId } = req.params;
    const orders = await db.order.getAll();

    res.status(200).json(orders);
  } catch (err) {
    console.log(err);
    res.status(422).json({ message: "worng some" });
  }
};
