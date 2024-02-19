import { TypeUsersModel } from "../models/TypeUsersModel.js";

export const getTypeUsers = async (req, res) => {
  try {
    const types = await TypeUsersModel.findAll({ where: { state: true } });
    res.status(200).json(types);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTypeUsers = async (req, res) => {
  try {
    const { type } = req.body;
    if (!type) {
      res.status(400).json({ message: "type is required" });
    }
    const types = await TypeUsersModel.create(req.body);
    res.status(201).json({ message: "create", types });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

