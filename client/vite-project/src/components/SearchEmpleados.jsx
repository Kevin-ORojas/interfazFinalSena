import React from "react";

export const SearchEmpleados = () => {
  return (
    <div className="w-full ">
      <div className="text-center py-4 mt-10 px-6 ">
        <input
          className="w-full p-3 rounded-md cursor-pointer shadow-blue-400 shadow-xl"
          type="text"
          placeholder="Buscar Empleado"
        />
      </div>

      {/* Agregar componentes para mostrar resultados */}

      <div>
        {/* Aquí se agregarán los resultados de la búsqueda */}
        {/* Resultado 1 */}
        <div className="py-4 px-6 border-b border-gray-200">
          <h3>Empleado 1</h3>
          <p>Nombre: John Doe</p>
          <p>Apellido: Smith</p>
          <p>Email: john.smith@example.com</p>
          {/* Botón para editar o eliminar el empleado */}
          <button className="bg-blue-500 mr-2 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Editar
          </button>
          <button className="bg-red-500  hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Eliminar
          </button>
        </div>
        {/* Resultado 2 */}
        <div className="py-4 px-6 border-b border-gray-200">
          <h3>Empleado 2</h3>
          <p>Nombre: Jane Doe</p>
          <p>Apellido: Johnson</p>
          <p>Email: jane.johnson@example.com</p>
          {/* Botón para editar o eliminar el empleado */}
          <button className="bg-blue-500 mr-2 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Editar
          </button>
          {/* Botón para editar o eliminar el empleado */}
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
