import React, { Fragment } from 'react';
import { TablaCompras } from '../Components/Tablas/TablaCompras';
import Header from '../Components/Header/Header';
import { Container } from 'react-bootstrap';
import Footer from '../Components/Footer/Footer';

const CarritoCompras = ( props ) => {
    return(
        <Fragment>
            <Header />
            <Container id="productos-pagina">
                
            </Container>
            <Footer />
        </Fragment>
    );
}

export default CarritoCompras;
