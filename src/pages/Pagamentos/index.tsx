import { useEffect, useState } from 'react';

import { IPagamentos } from '../../types/Pagamentos';

import Formulario from './Formulario';
import ListagemPagamentos from './ListagemPagamentos';


import PaymentsService from 'services/PaymentsService';

import { Payments, H3 } from './styles';
import { PaymentForm } from 'types/PaymentForm';

const valuesInitial = {
  id: '',
  numero_nota: 0,
  vencimento: '',
  banco: '',
  cliente: '',
  valor: 0,
  data_pagamento: ''
}

export default function Pagamentos(){
    const [payments, setPayments] = useState<IPagamentos[]>([]);
    const [ payment, setPayment ] = useState<PaymentForm>(valuesInitial);
    const [alert, setAlert] = useState({
      showMessage: false,
      message: ''
    });

    useEffect(() => {
      async function fetchData(){
        const paymentService = new PaymentsService();
        const response = await paymentService.get();
        setPayments(response);
      }
      fetchData();
    }, []);

  return(
    <Payments>
      <div>
        {alert.showMessage && <H3>{alert.message}</H3>}
      </div>
      <Formulario setPayment={setPayment} setPayments={setPayments} payment={payment} setAlert={setAlert}/>
      <ListagemPagamentos payments={payments} setPayments={setPayments} setPayment={setPayment} setAlert={setAlert}/>
    </Payments>
  )
}
