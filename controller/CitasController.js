import {CitaModel} from "../models/CitasMode.js"

export const getCita = async (req, res) => {
  const citas = await CitaModel.findAll({
    attributes: { exclude: ["status"] },
    where: { status: false },
  });
  if (!types) {
    return res.status(401).json({ message: "there is not data" });
  }
  res.status(200).json({ type: types });
};


  export const createCita = async (req, res) => {
    try {
      const { medico, fechayhora, idpersona} = req.body;
      if (!(medico ||  fechayhora ||  idpersona)) {
        res.status(400).json({ message: "all input is required" });
      }
      // Create user in our database
      const users = await CitaModel.create({
        medico,
        fechayhora,
        idpersona
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };