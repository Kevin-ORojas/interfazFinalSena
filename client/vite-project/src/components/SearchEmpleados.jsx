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
          <p>No hay resultados para </p>
        ) : (
          <div>
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
                <div key={id}>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Email</th>
                      <th>Puesto</th>
                      <th>Departamento</th>
                      <th>Salario</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{nombre}</td>
                      <td>{apellido}</td>
                      <td>{email}</td>
                      <td>{puesto}</td>
                      <td>{departamento}</td>
                      <td>{salario}</td>
                    </tr>
                  </tbody>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};
