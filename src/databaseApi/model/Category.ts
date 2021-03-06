import { Sequelize, DataTypes } from "sequelize";
import { connection } from "../databsae_connection";

export const Category = connection.define(
  "category",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },

    createdAt: { type: DataTypes.DATE },
    updateAt: { type: DataTypes.DATE },
  },
  {
    modelName: "Category",
  }
);

connection.sync();
