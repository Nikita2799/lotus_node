import { Sequelize, DataTypes } from "sequelize";
import { connection } from "../databsae_connection";
import { Product } from "./Product";

export const CodePhones = connection.define(
  "codes_phones",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      unique: false,
      allowNull: false,
    },
    code: {
      type: DataTypes.INTEGER,
      unique: false,
      allowNull: false,
    },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
  },
  {
    modelName: "User",
  }
);

connection.sync();
