import React, { useState, useEffect } from "react";
import "./style.css";

const Header = () => {
  const styles = {
    background: "linear-gradient(20deg, #6813cb, #2575fc)",
    textAlign: "center",
    borderRadius: "0.2em",
    color: "#FFF",
    padding: "0.3em",
    margin: "0.3em",
    fontSize: "14px"
  };

  return (
    <header style={styles}>
      <h1>
        Hooks Personalizados
        <span role="img" aria-label="hook emoji">
          ⚓
        </span>
      </h1>
    </header>
  );
};
// Hooks personalizados
const useSizes = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWitdth] = useState(window.innerWidth);

  const handleResize = () => {
    setWitdth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return {
    height,
    width
  };
};
export default function App() {
  const { height, width } = useSizes();
  return (
    <>
      <Header />
      <h1>
        {height} px
        {width} px
      </h1>
    </>
  );
}
