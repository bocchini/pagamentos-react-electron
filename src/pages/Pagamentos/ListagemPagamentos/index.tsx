import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';

import { IPagamentos } from '../../../types/Pagamentos';

import { Table, List, Button } from './styles';

import { Colors } from 'styles/colors';

import { helpersValue } from 'helpers/currency';
import { helperDate } from 'helpers/date';

type Props = {
  pagamentos: IPagamentos[]
}

function ListagemPagamentos({pagamentos}: Props){

  return(
    <div>
      <List>
        <div>
          <h2>Listagem de depósitos</h2>
        </div>
        <Table>
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
                <td>{helperDate(pagamento.vencimento)}</td>
                <td>{pagamento.banco}</td>
                <td>{pagamento.cliente}</td>
                <td>R$ {helpersValue(pagamento.valor)}</td>
                <td>{helperDate(pagamento.data_pagamento)}</td>
                <td> 
                  <Button>
                    <button type="submit">Editar <RiEdit2Line size={16} color={Colors.green}/></button>
                    <button type="submit">Apagar {pagamento.id}<RiDeleteBinLine size={16} color={Colors.red}/></button>    
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </List>
    </div>
  )
}

export default ListagemPagamentos;