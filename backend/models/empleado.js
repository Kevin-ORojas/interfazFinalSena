const mongoose = require("mongoose");
const { Schema } = mongoose;

// Definimos el esquema para el modelo Empleado

const EmpleadoSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  puesto: { type: String, required: true },
  departamento: { type: String, required: true },
  salario: { type: Number, required: true },
  fechaContratacion: { type: Date, required: true },
});

// Exportamos el modelo Empleado con el esquema definido

module.exports = mongoose.model("Empleado", EmpleadoSchema);
