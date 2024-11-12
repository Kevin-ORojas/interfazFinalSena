import React from "react";
import { addEmployed } from "../hooks/addEmployed";

export const AgregaEmpleado = () => {
  const {
    handleInputChange,
    handleSubmit,

    nombre,
    apellido,

    email,
    puesto,
    departamento,
    salario,
  } = addEmployed();

  return (
    <div className="border-1 w-full h-6/5 flex justify-center px-4 py-4">
      <form
        onSubmit={handleSubmit}
        className="sm:flex sm:flex-col border-zinc-800 l w-full md:grid md:grid-cols-2 items-center border-4 px-4 rounded-md shadow-lg shadow-slate-700 gap-4"
      >
        <div className="flex flex-col gap-4 ">
          <label for="nombre">Nombre:</label>
          <input
            className="border-2 border-indigo-400 rounded-md hover:shadow-2xl hover:border-black cursor-pointer mb-4"
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col gap-4 ">
          <label for="apellido">Apellido:</label>
          <input
            className="border-2 border-indigo-400 rounded-md hover:shadow-2xl hover:border-black cursor-pointer mb-4"
            type="text"
            id="apellido"
            name="apellido"
            value={apellido}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="flex flex-col gap-4 ">
          <label for="email">Email: </label>
          <input
            className="border-2 border-indigo-400 rounded-md hover:shadow-2xl hover:border-black cursor-pointer mb-4"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="flex flex-col gap-4 ">
          <label for="puesto">Puesto:</label>
          <input
            className="border-2 border-indigo-400 rounded-md hover:shadow-2xl hover:border-black cursor-pointer mb-4"
            type="text"
            id="puesto"
            name="puesto"
            value={puesto}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="flex flex-col gap-4 ">
          <label for="departamento">Departamento:</label>
          <input
            className="border-2 border-indigo-400 rounded-md hover:shadow-2xl hover:border-black cursor-pointer mb-4"
            type="text"
            id="departamento"
            name="departamento"
            value={departamento}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="flex flex-col gap-4 ">
          <label for="salario">Salario:</label>
          <input
            className="border-2 border-indigo-400 rounded-md hover:shadow-2xl hover:border-black cursor-pointer mb-4"
            type="number"
            id="salario"
            name="salario"
            value={salario}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="flex justify-center items-center col-span-2 mt-4 h-auto">
          <button
            className="border text-center px-4 py-4 rounded-md hover:shadow-2xl hover:shadow-indigo-400"
            type="submit"
          >
            Agregar Empleado
          </button>
        </div>
      </form>
    </div>
  );
};
