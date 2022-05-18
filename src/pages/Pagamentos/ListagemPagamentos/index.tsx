import Botao from '../../../components/Botao';

import { IPagamentos } from '../../../types/Pagamentos';

import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';

//import styles from './ListagemPagamentos.module.scss';

type Props = {
  pagamentos: IPagamentos[]
}

function ListagemPagamentos({pagamentos}: Props){

  return(
    <aside>
      <h2>Listagem de depositos</h2>
      <table>
        <thead>
          <tr>
            <th>Nota Nº</th>
            <th>Vencimento</th>
            <th>Banco</th>
            <th>Cliente</th>
            <th>Valor</th>
            <th>Data do Pagamento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pagamentos.map(pagamento => (
            <tr key={pagamento.id}>
              <td>{pagamento.numero_nota}</td>
              <td>{pagamento.vencimento}</td>
              <td>{pagamento.banco}</td>
              <td>{pagamento.cliente}</td>
              <td>R$ {pagamento.valor}</td>
              <td>{pagamento.data_pagamento}</td>
              <td> 
                <Botao type="submit">Editar <RiEdit2Line size={20} color="#4C4D5E"/></Botao>
                <Botao type="submit">Apagar <RiDeleteBinLine size={20} color="#FF0000"/></Botao>    
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </aside>
  )
}

export default ListagemPagamentos;