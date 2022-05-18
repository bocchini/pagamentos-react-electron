import { useEffect, useState } from 'react'
import { IPagamentos } from '../../types/Pagamentos';

import Formulario from './Formulario';
import ListagemPagamentos from './ListagemPagamentos';


import PaymentsService from 'services/PaymentsService';

//import styles from './Pagamentos.module.scss';

export default function Pagamentos(){
    const [payments, setPayments] = useState<IPagamentos[]>([]);

    useEffect(() => {
      async function fetchData(){       
        const paymentService = new PaymentsService();
        const response = paymentService.get();
        console.log('Pagamentos', response);
        setPayments(response);
      }     
      
      fetchData();
    }, [payments]);

  return(
    <div>
      <div>
        <Formulario  setPayments={setPayments}/>
      </div>
      <ListagemPagamentos pagamentos={payments}/>
    </div>
  )
}