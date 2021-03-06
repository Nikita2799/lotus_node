import mysql from "mysql";
import config from "../../../config/config";
import jwt from "jsonwebtoken";
import { QueryTypes, Sequelize } from "sequelize";
import { User } from "../model/User";
import { IOrder } from "../../modules/Order/type";
import { Order } from "../model/Order";
import { ProductRouter } from "../../modules/Product/router";
import { ProductOrder } from "../model/ProductOrder";

export class OrderApi {
  constructor(private readonly connection: Sequelize) {}

  public async addOrder(order: IOrder) {
    const result = await Order.create({
      typePost: order.typePost,
      fullName: order.fullName,
      city: order.city,
      orderId: order.orderId,
      numberPost: order.numberPost,
      phone: order.phone,
      typePay: order.typePay,
      status: 0,
    });

    for (let i = 0; i < order.productList.length; i++) {
      await ProductOrder.create({
        orderId: result.getDataValue("id"),
        productId: order.productList[i].id,
        currentPrice: order.productList[i].price,
        count: order.productList[i].amount,
        sale: order.productList[i].sale,
        productSale: order.productList[i].saleProduct,
      });
    }

    if (result === null) throw new Error("null");
    return "success";
  }

  public async getAll() {
    const orders = await Order.findAll();
    return orders;
  }

  public async getHistory(userId: any) {
    const orders = await Order.findAll({ where: { userId: userId } });

    return orders;
  }

  public async getHistoryProductOrder(orderId: any) {
    const products = await ProductOrder.sequelize?.query(
      `SELECT * FROM productOrders as po INNER JOIN products as p IN po.productId=p.id WHERE po.orderId = ${orderId} `,
      { type: QueryTypes.SELECT }
    );
    return products;
  }

  public async getProductOrder(orderId: any) {
    const products = await ProductOrder.sequelize?.query(
      `SELECT * FROM productOrders as po INNER JOIN products as p IN po.productId=p.id WHERE po.orderId = ${orderId} `,
      { type: QueryTypes.SELECT }
    );
    return products;
  }
}
