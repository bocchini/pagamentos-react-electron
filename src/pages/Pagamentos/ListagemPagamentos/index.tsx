import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';

import { IPagamentos } from '../../../types/Pagamentos';

import { Table, List, Button } from './styles';

import { Colors } from 'styles/colors';

import { helpersValue } from 'helpers/currency';
import { helperDate } from 'helpers/date';
import { PaymentForm } from 'types/PaymentForm';
import PaymentsService from 'services/PaymentsService';

type Props = {
  payments: IPagamentos[],
  setPayment: React.Dispatch<React.SetStateAction<PaymentForm | undefined >>
}

function ListagemPagamentos({payments, setPayment}: Props){

  const handlerUpdate =async (e:React.SyntheticEvent) => {
    e.preventDefault();
    const id = ((e.target as HTMLInputElement).value);
    if(id){
      const service = new PaymentsService();
      const paymentToUpdate = await service.getById(id);
      console.log(paymentToUpdate);
      setPayment(paymentToUpdate);
    }
  }

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
            {payments.map(payment => (
              <tr key={payment.id}>
                <td>{payment.numero_nota}</td>
                <td>{helperDate(payment.vencimento)}</td>
                <td>{payment.banco}</td>
                <td>{payment.cliente}</td>
                <td>R$ {helpersValue(payment.valor)}</td>
                <td>{helperDate(payment.data_pagamento)}</td>
                <td> 
                  <Button>
                    <button onClick={handlerUpdate} value={payment.id} type="submit">Editar <RiEdit2Line size={16} color={Colors.green}/></button>
                    <button type="submit">Apagar {payment.id}<RiDeleteBinLine size={16} color={Colors.red}/></button>    
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