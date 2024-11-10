const Empleado = require("../models/empleado");
const empleadoCtrl = {};

/**Defino los metodos para obtenera a un empleado */

/**
 * este codigo devuelde todos los empleados de la BD find busca todos los documentos en la coleccion empleado.
 */
empleadoCtrl.getEmpleados = async (req, res) => {
  const empleados = await Empleado.find();
  res.json(empleados);
};

/**Defino los metodos para crear un nuevo empleado */

empleadoCtrl.createEmpleados = async (req, res) => {
  const empleado = new Empleado(req.body);
  await empleado.save();
  res.json({
    status: "empleado guardado",
  });
};

//conseguir un unico empleado
empleadoCtrl.getUnicoEmpleado = async (req, res) => {
  const empleadoUnico = await Empleado.findById(req.params.id);
  res.json(empleadoUnico);
};

//actializar empleado

empleadoCtrl.editarEmpleado = async (req, res) => {
  const { id } = req.body;
  const empleadoEdit = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    puesto: req.body.puesto,
    departamento: req.body.departamento,
    salario: req.body.salario,
    fechaContratacion: req.body.fechaContratacion,
  };

  await Empleado.findByIdAndUpdate(id, { $set: empleadoEdit }, { new: true });
  res.json({
    status: "Empleado actualizado",
  });
};

// eliminar empleado
empleadoCtrl.eliminarEmpleado = async (req, res) => {
  await Empleado.findByIdAndDelete(req.params.id);
  res.json({
    status: "Empleado eliminado",
  });
};

//exporto modulo

module.exports = empleadoCtrl;
