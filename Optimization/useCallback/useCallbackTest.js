import React, { Component, useCallback, useEffect, useState } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

const Counter = ({ counter, increment }) => {
  // aqui la funcion que este llegando es otra porque se renderiza en el Componente App
  // Porque recibe otra funcion
  // usar el usaCall para pasar la misma referencia del props
  useEffect(() => {
    console.log("use Effect");
  }, [increment]);
  return (
    <div>
      {counter}
      <button onClick={increment}>Increment</button>
    </div>
  );
};
const App = () => {
  // esta funciones no se crean cuando se vuelve a renderizar el componente.
  const [counter, setCounter] = useState(0);
  // Cada vez que se renderiza por el cambio de estado se crea esta funcion.
  // usa useCallback si quieres que la funcion no cambia
  const increment = useCallback(() => {
    console.log("Render");
    setCounter((counter) => counter + 1);
  }, []);
  return (
    <div>
      <Counter counter={counter} increment={increment} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
