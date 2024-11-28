import React, { useState } from "react";
import { useBuscarEmpleados } from "../hooks/useBuscarEmpleado.js";

export const SearchEmpleados = () => {
  const [criterio, setCriterio] = useState(""); // Estado para guardar el texto del input de búsqueda
  const { empleados, cargando, error } = useBuscarEmpleados();

  const handleBuscar = (e) => {
    setCriterio(e.target.value); // Actualizar el criterio de búsqueda
  };

  // Filtra los empleados que coinciden con el criterio de búsqueda
  const empleadosFiltrados = criterio
    ? empleados.filter(
        (empleado) =>
          empleado.nombre.toLowerCase().includes(criterio.toLowerCase()) // Compara el criterio con los nombres
      )
    : [];

  return (
    <div className="w-full ">
      <div className="text-center py-4 mt-10 px-6 ">
        <input
          className="w-full p-3 rounded-md cursor-pointer shadow-blue-400 shadow-xl"
          type="text"
          placeholder="Buscar Empleado"
          value={criterio} // El valor del input es el estado 'criterio'
          onChange={handleBuscar} // Llamamos a manejar el cambio cada vez que el input cambie
        />
      </div>

      {/* Mostrar mensaje de carga si los empleados están siendo cargados */}
      {cargando && <p>Cargando...</p>}

      {/* Si hubo un error, lo mostramos */}
      {error && <p>Error al cargar empleados: {error.message}</p>}

      {/* Si no hay empleados filtrados, mostrar mensaje */}
      <div>
        {criterio && empleadosFiltrados.length === 0 ? (
          <p>No hay resultados para ver </p>
        ) : (
          <table className="w-full border-collapse border border-gray-400">
            <thead className="w-full">
              <tr className="bg-slate-400 ">
                <th className="border">Nombre</th>
                <th className="border">Apellido</th>
                <th className="border">Email</th>
                <th className="border">Puesto</th>
                <th className="border">Departamento</th>
                <th className="border">Salario</th>
                <th className="border"></th>
              </tr>
            </thead>
            <tbody>
              {empleadosFiltrados.map(
                ({
                  nombre,
                  apellido,
                  email,
                  id,
                  puesto,
                  departamento,
                  salario,
                }) => (
                  <tr key={id} className="px-4">
                    <td className="px-6 font-serif border">{nombre}</td>
                    <td className="px-6 font-serif border">{apellido}</td>
                    <td className="px-6 font-serif border">{email}</td>
                    <td className="px-6 font-serif border">{puesto}</td>
                    <td className="px-6 font-serif border">{departamento}</td>
                    <td className="px-6 font-serif border">{salario}</td>

                    <td className="flex gap-6 justify-center">
                      <button className="bg-red-400 border-none p-2">
                        Edit
                      </button>
                      <button className="border-none bg-blue-400 p-2">
                        delete
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
