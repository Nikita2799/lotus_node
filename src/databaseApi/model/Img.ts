import { Sequelize, DataTypes } from "sequelize";
import { connection } from "../databsae_connection";

export const Img = connection.define(
  "imgProduct",
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
    createdAt: DataTypes.DATE,
    updateAt: DataTypes.DATE,
  },
  {
    modelName: "Img",
  }
);

connection.sync();
