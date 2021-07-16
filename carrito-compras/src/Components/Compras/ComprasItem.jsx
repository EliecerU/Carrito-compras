import React, { useContext } from "react";
import { CarritoContext } from "../../Context/UserContext";
import { Button } from "react-bootstrap";

const ComprasItem = ({ productos }) => {
  const { incrementar, decrementar } = useContext(CarritoContext);

  return (
    <div>
      <tr key={productos.id}>
        <td>{productos.id}</td>
        <td>{productos.nombre}</td>
        <td>{productos.precio}</td>
        <td>
          <Button onClick={() => incrementar(productos)} variant="primary">Primary</Button>
          <Button onClick={() => decrementar(productos)} variant="primary">Primary</Button>
        </td>
      </tr>
    </div>
  );
};

export default ComprasItem;
