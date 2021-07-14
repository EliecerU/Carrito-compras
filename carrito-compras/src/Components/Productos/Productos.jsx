import React from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";


export const Productos = ( props ) => {

  return (
    <Container id="productos">
      {
        <Row >
          <Col>{}</Col>
          <Col className="my-2">
            
          </Col>
          <Col className="my-2">
            
          </Col>
          <Col className="my-2">
            <ButtonGroup aria-label="Basic example">
              <Button onClick={() => {}} variant="primary">
                Comprar
              </Button>
              <Button variant="danger">
                Agregar al carrito
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      }
      
    </Container>
  );

};
