import { UserModel } from "../models/UserModel.js";


export const createUsers = async (req, res) => {
  try {
    const { nombre, apellido, cedula,correo,telefono,especialidad,typeusers_id} = req.body;
    if (!(nombre ||  apellido ||  cedula||  correo ||  telefono||  especialidad ||  typeusers_id)) {
      res.status(400).json({ message: "all input is required" });
    }
    // check if email already exist
    // Validate if email exist in our database
    const oldUser = await UserModel.findOne({ where: { correo: correo,telefono:telefono } });
    if (oldUser) {
      return res.status(409).json("email already exist");
    }
    // Create user in our database
    const users = await UserModel.create({
      nombre,
      apellido,
      cedula,
      correo, 
      telefono,
      especialidad,
      typeusers_id
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

;

// export const buscarEspecialidad = async (req, res) => {
//   try {
//       // Obtenemos la especialidad de los parámetros de la ruta
//       const { especialidad } = req.params;

//       // Verificamos que la especialidad haya sido proporcionada
//       if (!especialidad) {
//           return res.status(400).json({ message: "Especialidad requerida" });
//       }

//       // Buscamos las personas que coincidan con la especialidad proporcionada
//       const personasPorEspecialidad = await UserModel.findAll({
//           where: {
//               especialidad: especialidad
//           }
//       });

//       // Verificamos si se encontraron personas
//       if (personasPorEspecialidad && personasPorEspecialidad.length > 0) {
//           return res.status(200).json({ personas: personasPorEspecialidad });
//       } else {
//           return res.status(404).json({ message: 'No se encontraron personas para la especialidad proporcionada' });
//       }
//   } catch (error) {
//       // Manejo de errores en caso de que algo falle durante la consulta a la base de datos
//       return res.status(500).json({ error: error.message });
//     }
// };

export const buscarEspecialidad = async (req, res) => {
  try {
      const { especialidad } = req.params;

      // Validación de la especialidad
      if (!especialidad || typeof especialidad !== 'string') {
          return res.status(400).json({ message: "Especialidad inválida" });
      }

      // Búsqueda de personas por especialidad
      const usuariosPorEspecialidad = await UserModel.findAll({
          where: {
              especialidad: especialidad
          }
      });

      // Verificación de resultados y respuesta
      if (usuariosPorEspecialidad && usuariosPorEspecialidad.length > 0) {
          return res.status(200).json({ usuarios: usuariosPorEspecialidad });
      } else {
          return res.status(404).json({ message: 'No se encontraron usuarios para la especialidad proporcionada' });
      }
  } catch (error) {
      // Manejo de errores con información detallada
      return res.status(500).json({ error: `Error en la consulta a la base de datos: ${error.message}` });
  }
};





