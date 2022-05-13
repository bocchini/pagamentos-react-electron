import React from 'react';
import Botao from '../Botao';



function ListagemPagamentos(){
  const pagamentos = [{
    id : 1,
    numero_nota: 153,
    vencimento: '02/03/2020',
    banco: 'Itaú',
    cliente: 'XP Investimentos',
    valor: 152.52,
    data_pagamento: ''
  },{
    id : 2,
    numero_nota: 1531,
    vencimento: '12/03/2020',
    banco: 'Bradesco',
    cliente: 'Banco ABC',
    valor: 52.52,
    data_pagamento: ''
  },
  {
    id : 3,
    numero_nota: 31,
    vencimento: '12/05/2022',
    banco: 'Itaú',
    cliente: 'ZURIC',
    valor: 5500,
    data_pagamento: '12/05/2022'
  },
];

  return(
    <aside>
      <h2>Listagem de depositos</h2>
      <table>
      <tr>
        <th>Nota Nº</th>
        <th>Vencimento</th>
        <th>Banco</th>
        <th>Cliente</th>
        <th>Valor</th>
        <th>Data do Pagamento</th>
        <th>Ações</th>
      </tr>
      {pagamentos.map(pagamento => (
        <tr key={pagamento.id}>
          <td>{pagamento.numero_nota}</td>
          <td>{pagamento.vencimento}</td>
          <td>{pagamento.banco}</td>
          <td>{pagamento.cliente}</td>
          <td>{pagamento.valor}</td>
          <td>{pagamento.data_pagamento}</td>
          <td><Botao/><Botao/></td>
      </tr>
      ))}
    </table>
    </aside>
  )
}

export default ListagemPagamentos;