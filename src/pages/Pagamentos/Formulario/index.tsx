import React from 'react';
import { useForm } from 'react-hook-form';
import { RiSave3Fill } from 'react-icons/ri';

import { IPagamentos } from '../../../types/Pagamentos';

import { Form, Button, List } from './styles';
import { Colors } from '../../../styles/colors';

import PaymentsService from 'services/PaymentsService';
import { PaymentForm } from 'types/PaymentForm';

import { Alert } from 'types/Alert';

interface Props {
  setAlert: React.Dispatch<React.SetStateAction<Alert>>;
  payment: PaymentForm | undefined;
  setPayment: React.Dispatch<React.SetStateAction<PaymentForm | undefined>>;
  setPayments: React.Dispatch<React.SetStateAction<IPagamentos[]>>;
}

function Formulario({ setAlert, payment, setPayment, setPayments }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PaymentForm>();



  const onSubmit = async (data: IPagamentos | any) => {
    const paymentJson = JSON.stringify(data, null, 2);
    const service = new PaymentsService();
    console.log(payment);
    // if(paymentJson.'id'){
    //   //const new = await service.
    // }
    const newPayment = await service.post(paymentJson);
    setAlert({showMessage: true, message: 'Pagamento salvo com sucesso!'});
    setPayments((oldPayments) => [...oldPayments, newPayment]);
    reset();
  };

  const handleReset = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setPayment({
      id: '',
      banco: '',
      cliente: '',
      data_pagamento: undefined,
      vencimento: '',
      numero_nota: undefined,
      valor: undefined,
    });
    reset();
  };

  return (
    <List>
      <div>
        <h2>Criar | Editar um Pagamento</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form>
          <div>
            <input
              value={payment?.id}
              disabled
              type="text"
              {...register('id')}
            />
          </div>
          <div>
            <label>Nota Nº:</label>
            <input
              value={payment?.numero_nota}
              {...register('numero_nota', { required: true })}
              type="number"
            />
            {errors.numero_nota && errors.numero_nota.type === 'required' && (
              <div className="error">Digite o número da nota.</div>
            )}
          </div>
          <div>
            <label>Vencimento:</label>
            <input
              value={payment?.vencimento}
              {...register('vencimento', { required: true })}
              type="date"
              required
            />
            {errors.vencimento && errors.vencimento.type === 'required' && (
              <div className="error">Digite o número da nota.</div>
            )}
          </div>
          <div>
            <label>Banco:</label>
            <input
              value={payment?.banco}
              {...register('banco')}
              type="text"
            />
            {errors.banco && errors.banco.type === 'required' && (
              <div className="error">Digite o número da nota.</div>
            )}
          </div>
          <div>
            <label>Cliente:</label>
            <input
              value={payment?.cliente}
              {...register('cliente', { required: true })}
              type="text"
              required
            />
            {errors.cliente && errors.cliente.type === 'required' && (
              <div className="error">Digite o número da nota.</div>
            )}
          </div>
          <div>
            <label>Valor R$: </label>
            <input
              value={payment?.valor}
              {...register('valor')}
              type="number"
              min="0"
              step=".01"
            />
            {errors.valor && errors.valor.type === 'required' && (
              <div className="error">Digite o número da nota.</div>
            )}
          </div>
          <div>
            <label>Data Pgto:</label>
            <input
              value={payment?.data_pagamento}
              {...register('data_pagamento')}
              type="date"
            />
          </div>
        </Form>
        <Button>
          <button type="submit">
            Salvar
            <RiSave3Fill size={20} color={Colors.green2} />
          </button>
          <button type="reset" onClick={handleReset}>
            Limpar formulário
          </button>
        </Button>
      </form>
    </List>
  );
}

export default Formulario;
