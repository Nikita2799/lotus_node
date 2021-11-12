import { Sequelize, DataTypes } from "sequelize";
import { connection } from "../databsae_connection";

export const User = connection.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    leaderId: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    allInvitePeople: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    myInviteLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passportData: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    balance: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    modelName: "User",
  }
);

connection.sync();
