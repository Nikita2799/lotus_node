import { Sequelize, DataTypes } from "sequelize";
import { connection } from "../databsae_connection";
import { Product } from "./Product";

export const Img = connection.define(
  "imgProducts",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      unique: false,
      allowNull: false,
    },
    src: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    createdAt: { type: DataTypes.DATE },
    updateAt: { type: DataTypes.DATE },
  },
  {
    modelName: "Product",
  }
);

connection.sync();
