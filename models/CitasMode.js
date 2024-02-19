import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { UserModel } from "./UserModel.js";

export const CitaModel = sequelize.define(
  "citas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    medico: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fechayhora: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

UserModel.hasMany(CitaModel, { foreignKey: "idpersona" });
CitaModel.belongsTo(UserModel, { foreignKey: "idpersona", as: "paciente" });
