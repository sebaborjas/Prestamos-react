import React, { Fragment } from "react";
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
//LOS COMPONENTES SE UTILIZAN: < COMPONENTE />

function App() {
  return (
    //SI QUITO DIV DA ERROR PORQUE SE DEBE RETORNAR UN ELEMENTO QUE PUEDE CONTENER MUCHOS MAS
    //SINO SE PUEDE IMPORTAR FRAGMENT
    <Fragment>
      <Header
        titulo="Cotizador de Prestamos"
        descripcion="Utiliza el formulario y obten una cotizacion"
      />
      <div className="container">
        <Formulario />
      </div>
    </Fragment>
  );
}

export default App;
