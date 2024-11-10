const Empleado = require("../models/empleado");
const empleadoCtrl = {};

/**Defino los metodos para obtenera a un empleado */

/**
 * este codigo devuelde todos los empleados de la BD find busca todos los documentos en la coleccion empleado.
 */
empleadoCtrl.getEmpleado = async (req, res) => {
  const empleado = await Empleado.find();
  res.json(empleado);
};

/**Defino los metodos para crear un nuevo empleado */

empleadoCrtl.createEmpleados = async (req, res) => {
  const empleado = new Empleado(req.body);
  await empleado.save();
  res.json({
    status: "empleado guardado",
  });
};
