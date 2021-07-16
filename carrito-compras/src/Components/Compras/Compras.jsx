import React, { useContext } from "react";
import { CarritoContext } from "../../Context/UserContext";
import ComprasItem from "./ComprasItem";

const Compras = () => {
  const { itemCarrito } = useContext(CarritoContext);

  return (
    <div>
      {itemCarrito.map((producto) => (
        <ComprasItem key={producto.id} productos={producto} />
      ))}
    </div>
  );
};

export default Compras;
