import React from "react";

export const SearchEmpleados = () => {
  return (
    <div className="w-full ">
      <div className="text-center py-4 mt-10 px-6">
        <input
          className="w-full p-3 rounded-md cursor-pointer"
          type="text"
          placeholder="Buscar Empleado"
        />
      </div>
    </div>
  );
};
