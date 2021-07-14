import React from "react";
import { Switch, Route } from "react-router-dom";
import Inicio from './Pages/Inicio';
import CarritoCompras from "./Pages/CarritoCompras";
import { ProductosPagina } from "./Pages/ProductosPagina";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/carrito" component={CarritoCompras} />
      <Route exact path="/productos" component={ProductosPagina} />
    </Switch>
  );
};
