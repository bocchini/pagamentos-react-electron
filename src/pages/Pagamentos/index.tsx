import { useEffect, useState } from 'react';

import { IPagamentos } from '../../types/Pagamentos';

import Formulario from './Formulario';
import ListagemPagamentos from './ListagemPagamentos';


import PaymentsService from 'services/PaymentsService';

import { Payments, H3 } from './styles';
import { PaymentForm } from 'types/PaymentForm';



export default function Pagamentos(){
    const [payments, setPayments] = useState<IPagamentos[]>([]);
    const [alert, setAlert] = useState(false);
    const [ payment, setPayment ] = useState<PaymentForm>();
    
    useEffect(() => {
      async function fetchData(){       
        const paymentService = new PaymentsService();
        const response = await paymentService.get();    
        setPayments(response);       
      }  
      if(alert) {
        setTimeout(() => {
          setAlert(false);
        }, 2500)  
      }; 
      fetchData();
    }, [alert]);

  return(
    <Payments>
      <div>
        {alert && <H3> Pagamento salvo</H3>}
      </div>
      <Formulario setPayment={setPayment} setPayments={setPayments} payment={payment} setAlert={setAlert}/>
      <ListagemPagamentos payments={payments} setPayment={setPayment}/>
    </Payments>
  )
}