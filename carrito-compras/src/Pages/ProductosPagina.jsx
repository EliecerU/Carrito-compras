import React, { Fragment } from 'react';
import { Container, Col } from 'react-bootstrap';
import { Productos } from '../Components/Productos/Productos.jsx';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer.jsx';

export const ProductosPagina = ( ) => {

    return(
        <Fragment>
            <Header />
            <Container id="productos-pagina">
                <Col  className="m-5">
                    <h3>Productos Tecnologicos</h3>
                </Col>
                <Col>
                    <Productos />
                </Col>
            </Container>
            <Footer />
        </Fragment>
    );
} 