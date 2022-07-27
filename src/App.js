import React, { Fragment, useState } from "react";
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
//LOS COMPONENTES SE UTILIZAN: < COMPONENTE />

function App() {
  //Defino el state aca ya que fluyen del componente padre al hijo
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState("");
  const [total, guardarTotal] = useState(0);

  return (
    //SI QUITO DIV DA ERROR PORQUE SE DEBE RETORNAR UN ELEMENTO QUE PUEDE CONTENER MUCHOS MAS
    //SINO SE PUEDE IMPORTAR FRAGMENT
    <Fragment>
      <Header
        titulo="Cotizador de Prestamos"
        descripcion="Utiliza el formulario y obten una cotizacion"
      />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          total={total}
          guardarTotal={guardarTotal}
        />
        <p>Total a pagar: $ {total}</p>
      </div>
    </Fragment>
  );
}

export default App;
