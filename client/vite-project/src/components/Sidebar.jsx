import React, { useState } from "react";
import { Loading } from "./Loading";
import GetEmpleados from "./getEmpleados";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <aside
        className={`w-64 h-screen bg-gray-800 text-white p-5 ${
          isOpen ? "block" : "hidden"
        } md:block transition-all`}
      >
        <h3>mi sidebar</h3>

        <ul className="flex flex-col gap-5 py-4">
          <Link to={"../Home"}>Inicio</Link>

          <Link to={"../getEmpleados"}>Lista empleados</Link>
        </ul>
      </aside>
    </div>
  );
};
