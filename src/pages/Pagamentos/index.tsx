import { useEffect, useState } from 'react';

import { IPagamentos } from '../../types/Pagamentos';

import Formulario from './Formulario';
import ListagemPagamentos from './ListagemPagamentos';


import PaymentsService from 'services/PaymentsService';

import { Payments, H3 } from './styles';
import { PaymentForm } from 'types/PaymentForm';



export default function Pagamentos(){
    const [payments, setPayments] = useState<IPagamentos[]>([]);
    const [alert, setAlert] = useState({
      showMessage: false,
      message: ''
    });
    const [ payment, setPayment ] = useState<PaymentForm>();

    useEffect(() => {
      async function fetchData(){
        const paymentService = new PaymentsService();
        const response = await paymentService.get();
        setPayments(response);
      }
      // if(alert) {
      //   setTimeout(() => {
      //     setAlert({
      //       showMessage: false,
      //       message: ''
      //     });
      //   }, 2500)
      // };
      fetchData();
      console.log('Passou aqui');
    }, []);

  return(
    <Payments>
      <div>
        {alert.showMessage && <H3>{alert.message}</H3>}
      </div>
      <Formulario setPayment={setPayment} setPayments={setPayments} payment={payment} setAlert={setAlert}/>
      <ListagemPagamentos payments={payments} setPayment={setPayment} setAlert={setAlert}/>
    </Payments>
  )
}
