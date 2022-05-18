import React from 'react';
import { useForm } from 'react-hook-form';

import Botao from '../../../components/Botao';
import { VscSaveAs } from 'react-icons/vsc';

import { IPagamentos } from '../../../types/Pagamentos';
import PaymentsService from 'services/PaymentsService';

interface Props {
  setPayments: React.Dispatch<React.SetStateAction<IPagamentos[]>>
}

type PaymentSubmitForm = {
  id? : number,
  numero_nota: number,
  vencimento: string,
  banco: string,
  cliente: string,
  valor: number,
  data_pagamento?: string
}


function Formulario({setPayments }: Props) {

  const {register, handleSubmit, formState: { errors }, reset} = useForm<PaymentSubmitForm>();

   const onSubmit = (data: IPagamentos | any) => {
    const paymentJson =  JSON.stringify(data, null, 2);
    const service = new PaymentsService();
    service.post(paymentJson);
    const payment = JSON.parse(paymentJson);

    setPayments( oldPayment => [...oldPayment, payment]);
    reset();
  };

    return(
      <div>         
        <form onSubmit={handleSubmit(onSubmit)}>
          <div><input type="number" {...register('id')} value={5}/></div>
          <div>
            <label>Nota Nº</label><input {...register('numero_nota', { required: true})} type="number"/>
            {errors.numero_nota && errors.numero_nota.type === "required" && (
            <div className="error">Digite o número da nota.</div>
          )} 
          </div>        
          <div>
            <label>Vencimento</label><input {...register('vencimento', { required: true})} type="date" required/>
            {errors.vencimento && errors.vencimento.type === "required" && (
              <div className="error">Digite o número da nota.</div>
            )}
          </div>
          <div>
            <label>Banco</label><input{...register('banco')} type="text"/>
            {errors.banco && errors.banco.type === "required" && (
              <div className="error">Digite o número da nota.</div>
            )}
          </div>
          <div>
            <label>Cliente</label><input {...register('cliente', { required: true})} type="text" required/>
            {errors.cliente && errors.cliente.type === "required" && (
              <div className="error">Digite o número da nota.</div>
            )}
          </div>
          <div>
            <label>Valor R$ </label><input {...register('valor')}  type="number" min="0" step=".01"/>
            {errors.valor && errors.valor.type === "required" && (
              <div className="error">Digite o número da nota.</div>
            )}
          </div>
          <div><label>Data Pgto</label><input {...register('data_pagamento')} type="date"/></div>
          <div>
          <Botao type="submit">Adicionar<VscSaveAs size={20} color="#6aa84f"/></Botao>            
          </div>
        </form>
      </div>
    )
  
}

export default Formulario;