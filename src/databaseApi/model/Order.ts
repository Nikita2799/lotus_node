import { Sequelize, DataTypes } from "sequelize";
import { connection } from "../databsae_connection";

export const Order = connection.define(
  "orders",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    typePost: {
      type: DataTypes.INTEGER,
      unique: false,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    numberPost: {
      type: DataTypes.INTEGER,
      unique: false,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: true,
    },
    typePay: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updateAt: DataTypes.DATE,
  },
  {
    modelName: "Order",
  }
);

connection.sync();
