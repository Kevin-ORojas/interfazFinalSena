import React from "react";

export const AgregaEmpleado = () => {
  return (
    <div className="">
      <form action="">
        <div>
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div>
          <label for="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" required />
        </div>

        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div>
          <label for="puesto">Puesto:</label>
          <input type="text" id="puesto" name="puesto" required />
        </div>

        <div>
          <label for="departamento">Departamento:</label>
          <input type="text" id="departamento" name="departamento" required />
        </div>

        <div>
          <label for="salario">Salario:</label>
          <input type="number" id="salario" name="salario" required />
        </div>

        <div>
          <label for="fechaContratacion">Fecha de Contratación:</label>
          <input
            type="date"
            id="fechaContratacion"
            name="fechaContratacion"
            required
          />
        </div>

        <button type="submit">Agregar Empleado</button>
      </form>
    </div>
  );
};
