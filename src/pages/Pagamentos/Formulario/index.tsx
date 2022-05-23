import React from 'react';
import { useForm } from 'react-hook-form';

import { IPagamentos } from '../../../types/Pagamentos';
import PaymentsService from 'services/PaymentsService';

import { Form, Button, List } from './styles';
import { Colors } from '../../../styles/colors'

import { RiSave3Fill } from 'react-icons/ri';
interface Props {
  setAlert: React.Dispatch<React.SetStateAction<boolean>>,
  alert: boolean
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


function Formulario({setAlert, alert }: Props) {

 
  const {register, handleSubmit, formState: { errors }, reset} = useForm<PaymentSubmitForm>();

   const onSubmit = async (data: IPagamentos | any) => {
    const paymentJson =  JSON.stringify(data, null, 2);
    const service = new PaymentsService();
    await service.post(paymentJson);
    setAlert(true);
  
    reset();
   };

    return(
      <List>   
         <div>
          <h2>Criar | Editar um Pagamento</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} >
          <Form>
            <div><input disabled type="number" {...register('id')}/></div>
            <div>
              <label>Nota Nº:</label><input {...register('numero_nota', { required: true})} type="number"/>
              {errors.numero_nota && errors.numero_nota.type === "required" && (
              <div className="error">Digite o número da nota.</div>
            )} 
            </div>        
            <div>
              <label>Vencimento:</label><input {...register('vencimento', { required: true})} type="date" required/>
              {errors.vencimento && errors.vencimento.type === "required" && (
                <div className="error">Digite o número da nota.</div>
              )}
            </div>
            <div>
              <label>Banco:</label><input {...register('banco')} type="text"/>
              {errors.banco && errors.banco.type === "required" && (
                <div className="error">Digite o número da nota.</div>
              )}
            </div>
            <div>
              <label>Cliente:</label><input {...register('cliente', { required: true})} type="text" required/>
              {errors.cliente && errors.cliente.type === "required" && (
                <div className="error">Digite o número da nota.</div>
              )}
            </div>
            <div>
              <label>Valor R$: </label><input {...register('valor')}  type="number" min="0" step=".01"/>
              {errors.valor && errors.valor.type === "required" && (
                <div className="error">Digite o número da nota.</div>
              )}
            </div>
            <div><label>Data Pgto:</label><input {...register('data_pagamento')} type="date"/></div>
          </Form>
          <Button>
            <button type="submit">Salvar              
                  <RiSave3Fill size={20} color={Colors.green2} />              
                  
            </button>                       
          </Button>
        </form>
      </List>
    )  
}

export default Formulario;