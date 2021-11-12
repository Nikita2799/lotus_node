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
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    createdAt: DataTypes.DATE,
    updateAt: DataTypes.DATE,
  },
  {
    modelName: "ProductOrder",
  }
);

connection.sync();
