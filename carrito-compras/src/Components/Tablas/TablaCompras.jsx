import { Table, Container, Col } from "react-bootstrap";
import React, { useContext } from "react";
import { CarritoContext } from "../../Context/UserContext";
import Compras from "../Compras/Compras";

export const TablaCompras = ( props ) => {
  const {
    itemCarrito,
    precioTotal,
    contadorItem,
    comprar_,
    cancelarCompra,
    comprar
  } = useContext(CarritoContext);

  return (
    <Container>
      <Col className="m-5">
        <h3>Carrito de compras</h3>
      </Col>
      <Col className="m-5">
        <Table striped bordered hover>
          {itemCarrito.length > 0 ? (
            <thead>
              <tr>
                <th>#</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Opciones</th>
              </tr>
            </thead>
          ) : (
            <h3></h3>
          )}
          <tbody>
            {itemCarrito.length > 0 ? (
              <Compras />
            ) : (
              <h4>No hay productos en el carrito</h4>
            )}
          </tbody>
        </Table>
      </Col>
    </Container>
  );
};
