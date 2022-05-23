import { useEffect, useState } from 'react';

import { IPagamentos } from '../../types/Pagamentos';

import Formulario from './Formulario';
import ListagemPagamentos from './ListagemPagamentos';


import PaymentsService from 'services/PaymentsService';

import { Payments, H3 } from './styles'

export default function Pagamentos(){
    const [payments, setPayments] = useState<IPagamentos[]>([]);
    const [alert, setAlert] = useState(false);
    
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
    }, [payments, alert]);

  return(
    <Payments>
      <div>
        {alert && <H3> Pagamento salvo</H3>}
      </div>
      <Formulario alert={alert} setAlert={setAlert}/>
      <ListagemPagamentos pagamentos={payments}/>
    </Payments>
  )
}