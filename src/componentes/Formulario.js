import React, { Fragment, useState } from "react";
import { calcularTotal } from "../helpers";

const Formulario = (props) => {
  const {
    cantidad,
    guardarCantidad,
    plazo,
    guardarPlazo,
    total,
    guardarTotal,
  } = props;

  const [error, guardarError] = useState(false);

  const calcularPrestamo = (e) => {
    e.preventDefault();
    //Validar
    if (cantidad === 0 || isNaN(cantidad) || plazo === 0) {
      guardarError(true);
      return;
    }
    guardarError(false);

    //Realizar cotizacion
    const total = calcularTotal(cantidad, plazo);

    //Una vez calculado, guardarTotal(Total);
    guardarTotal(total);
  };

  return (
    <Fragment>
      <form onSubmit={calcularPrestamo}>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={(evento) =>
                guardarCantidad(parseInt(evento.target.value))
              }
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select
              className="u-full-width"
              onChange={(evento) => guardarPlazo(parseInt(evento.target.value))}
            >
              <option value="0">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>
      {/* Pregunto si hay error y muestro el mensaje */}
      {error ? (
        <p className="error">Todos los campos son obligatorios</p>
      ) : null}
    </Fragment>
  );
};

export default Formulario;
