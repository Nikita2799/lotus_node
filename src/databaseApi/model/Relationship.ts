import { DataTypes } from "sequelize/types";
import { connection } from "../databsae_connection";

export const Relationship = connection.define(
  "relationship",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    leaderId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    procent: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    structure: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: { type: DataTypes.DATE },
    updateAt: { type: DataTypes.DATE },
  },
  {
    modelName: "Relationship",
  }
);
