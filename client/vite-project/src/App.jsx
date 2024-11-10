import { useState } from "react";
import Home from "./components/Home";
import { Sidebar } from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import GetEmpleados from "./components/getEmpleados";
import { AgregaEmpleado } from "./components/AgregaEmpleado";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex">
        <Sidebar isLoading={false} />

        <Routes>
          {/* Aquí se añadirán las rutas para cada componente */}
          <Route path="home" element={<Home />} />
          <Route path="getEmpleados" element={<GetEmpleados />} />
          <Route path="addEmpleados" element={<AgregaEmpleado />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
