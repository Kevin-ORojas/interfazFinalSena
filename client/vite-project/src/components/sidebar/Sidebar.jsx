import React, { useState } from "react";
import { Loading } from "../Loading";
import GetEmpleados from "../getEmpleados";

export const Sidebar = (isLoading) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      <aside
        className={`w-64 h-screen bg-gray-800 text-white p-5 ${
          isOpen ? "block" : "hidden"
        } md:block transition-all`}
      >
        <h3>mi sidebar</h3>
        <ul>
          <li>
            <a href="">INICIO</a>
          </li>

          <li>
            <a href="">lista empleados</a>
          </li>

          <li>
            <a href="">Agregar empleado</a>
          </li>
        </ul>
      </aside>
    </div>
  );
};
