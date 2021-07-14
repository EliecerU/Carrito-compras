import { Table, Container, Col, Button } from "react-bootstrap";
import React from "react";

export const TablaCompras = (props) => {
  return (
    <Container>
      <Col className="m-5">
        <h3>Carrito de compras</h3>
      </Col>
      <Col className="m-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {
              <tr>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>
                  <Button variant="primary">Primary</Button>
                  <Button variant="primary">Primary</Button>
                </td>
              </tr>
            }
          </tbody>
        </Table>
      </Col>
    </Container>
  );
};
