//Numero de items
export const numeroItem = (itemCarrito) => {
  const contador = itemCarrito.reduce(
    (productosTotal, producto) => productosTotal + producto.contadorItem,
    0
  );
  return contador;
};

//Precio total carrito de compras
export const precioTotal = (itemCarrito) => {
  return itemCarrito
    .reduce(
      (precioTotal, producto) =>
        precioTotal + producto.precio * producto.contadorItem,
      0
    )
    .toFixed(2);
};

export const productoReducer = (state, action) => {
  switch (action.type) {
    case "agregar-producto":
      if (!state.itemCarrito.find((item) => item.id === action.payload.id)) {
        state.itemCarrito.push({
          ...action.payload,
          contadorItem: 1,
        });
      }
      let rtn = {
        ...state, 
        contadorItem: numeroItem(state.itemCarrito),
        precioTotal: precioTotal(state.itemCarrito),
        itemCarrito: [...state.itemCarrito]
      }

      return rtn;
      case "quitar-producto":
        const productosNuevos = state.itemCarrito.filter(
          (item) => item.id !== action.payload.id
        );

        return{
          ...state,
          contadorItem: numeroItem(productosNuevos),
          precioTotal: precioTotal(productosNuevos),
          itemCarrito: [
            ...state.itemCarrito.filter((item) => item.id !== action.payload.id)
          ]
        };
      case "aumentar": 
        const nuevoEstadoProductosNuevos = {
          ...state,
          itemCarrito: state.itemCarrito.map((item) => {
            if (item.id === action.payload.id ) {
              return {...item, contadorItem: item.contadorItem + 1};
            }else {
              return item;
            }
          })
        };
        const nuevoEstado = {
          ...nuevoEstadoProductosNuevos,
          contadorItem: numeroItem(nuevoEstadoProductosNuevos.itemCarrito),
          precioTotal: precioTotal(nuevoEstadoProductosNuevos.itemCarrito)
        };

        return nuevoEstado;
      case "decrementar":
          const nuevoEstadoProductosDecrementado = {
            ...state,
            itemCarrito: state.itemCarrito.map((item) => {
              if (item.id === action.payload.id) {
                return {...item, contadorItem: item.contadorItem -1};
              }else{
                return item;
              }
            })
          }

          return {
            ...nuevoEstadoProductosDecrementado,
            contadorItem: numeroItem(nuevoEstadoProductosDecrementado.itemCarrito),
            precioTotal: precioTotal(nuevoEstadoProductosDecrementado.itemCarrito)
          }
      case "comprar":
        return {
          itemCarrito: [],
          comprar: true,
          contadorItem: 0,
          precioTotal: 0.0
        }      
      case "cancelar":
        return {
          itemCarrito: [],
          comprar: false,
          contadorItem: 0,
          precioTotal: 0.0
        }   
    default:
      return state;
  }
};

