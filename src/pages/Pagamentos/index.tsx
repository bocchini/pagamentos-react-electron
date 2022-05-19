import { useEffect, useState } from 'react';

import { IPagamentos } from '../../types/Pagamentos';

import Formulario from './Formulario';
import ListagemPagamentos from './ListagemPagamentos';


import PaymentsService from 'services/PaymentsService';

import { Payments } from './styles'

export default function Pagamentos(){
    const [payments, setPayments] = useState<IPagamentos[]>([]);

    useEffect(() => {
      async function fetchData(){       
        const paymentService = new PaymentsService();
        const response = paymentService.get();        
        setPayments(response);
      }     
      
      fetchData();
    }, [payments]);

  return(
    <Payments>
      <Formulario setPayments={setPayments}/>
      <ListagemPagamentos pagamentos={payments}/>
    </Payments>
  )
}