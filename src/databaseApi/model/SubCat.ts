import { Sequelize, DataTypes } from "sequelize";
import { connection } from "../databsae_connection";

export const SubCat = connection.define(
  "subcategory",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
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
    modelName: "SubCat",
  }
);

connection.sync();
