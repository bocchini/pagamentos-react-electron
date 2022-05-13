import React from 'react';

import Botao from '../Botao';

function Formulario() {
  const dataAtual = new Date();

    return(
      <div>
        <form action="">
          <div><label>Nota Nº</label><input type="number"/></div>
          <div><label>Vencimento</label><input type="date" required/></div>
          <div><label>Banco</label><input type="text"/></div>
          <div><label>Cliente</label><input type="text" required/></div>
          <div><label>Valor</label><input type="number" min="0" max="100" step=".01"/></div>
          <div><label>Data Pgto</label><input type="date" placeholder={dataAtual}/></div>
          <div>
          <Botao/>
          </div>
        </form>
      </div>
    )
  
}

export default Formulario;