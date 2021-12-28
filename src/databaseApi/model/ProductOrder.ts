import { Sequelize, DataTypes } from "sequelize";
import { connection } from "../databsae_connection";

export const ProductOrder = connection.define(
  "productOrder",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currentPrice: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    sale: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    productSale: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    createdAt: { type: DataTypes.DATE },
    updateAt: { type: DataTypes.DATE },
  },
  {
    modelName: "ProductOrder",
  }
);

connection.sync();
