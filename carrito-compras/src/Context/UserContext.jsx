import { createContext, useReducer } from "react";
import { productoReducer } from './UserReducer';

export const CarritoContext = createContext();

const estadoInicial = {
    itemCarrito: [],
    contadorItem: 0,
    precioTotal: 0.0,
    comprar_: false
} 

const CarritoContextProvider = ({ children }) =>{

    const [state, dispatch] = useReducer(productoReducer, estadoInicial);

    const incrementar = ( payload ) => {
        dispatch({ type: "aumentar", payload});
    }

    const decrementar = ( payload ) => {
        dispatch({ type: "decrementar", payload});
    }

    const agregarProducto = ( payload ) => {
        dispatch({ type: "agregar-producto", payload});
    } 

    const quitarProducto = ( payload ) => {
        dispatch({ type: "quitar-producto", payload});
    }

    const cancelarCompra = ( ) => {
        dispatch({ type: "cancelar"});
    }

    const comprar = ( ) => {
        dispatch({ type: "comprar"});
    }

    const contextValues = {
        incrementar,
        comprar,
        cancelarCompra,
        quitarProducto,
        agregarProducto,
        decrementar,
        ...state
    }

    return (
        <CarritoContext.Provider value={contextValues}>
            {children}
        </CarritoContext.Provider>
    );

}

export default CarritoContextProvider;