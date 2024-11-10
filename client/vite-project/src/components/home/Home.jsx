import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../Loading";
import GetEmpleados from "../getEmpleados";

const Home = () => {
  const { state, isLoading } = useFetch("http://localhost:8080/api/empleados");
  console.log(state);

  return (
    <div className="flex-1 p-5">
      {isLoading ? <Loading /> : <GetEmpleados />}
    </div>
  );
};

export default Home;
