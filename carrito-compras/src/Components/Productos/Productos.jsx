import React, { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { CarritoContext } from "../../Context/UserContext";

export const Productos = ( props ) => {

  const { agregarProducto, incrementar, itemCarrito } = useContext(CarritoContext);
  
  const enCarrito = ( productos ) => {
    return !!itemCarrito.find((item) => item.id === productos.id);
  } 

  return (
    <Row className="itemCarrito">
      <Col md={6}>
        <img 
          className="card-img-top"
         src={props.productos.imagen} 
         alt="..." width="200" height="150"/>
      </Col>
      <Col md={6}>
        <div className="small mb-1"> 
          {props.productos.id}
        </div>
        <h4>{props.productos.nombre}</h4>
        <div className="fs-5 mb-5">
          <span>{props.productos.precio}</span>
        </div>
        <p></p>
        <div className="d-flex">
          {
            enCarrito(props.productos) && (
              <Button onClick={() => incrementar(props.productos)} >Agregar mas</Button>
            )
          }
          {
            !enCarrito(props.productos) && (
              <Button onClick={() => agregarProducto(props.productos)} >Agregar al carrito</Button>
              
            )
            
          }
        </div>
      </Col>
    </Row>
  );

};
