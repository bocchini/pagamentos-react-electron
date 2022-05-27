import React from 'react';

import { RiSave3Fill } from 'react-icons/ri';


import { Form, Button, List } from './styles';
import { Colors } from '../../../styles/colors';

import { IPagamentos } from '../../../types/Pagamentos';
import PaymentsService from 'services/PaymentsService';
import { PaymentForm } from 'types/PaymentForm';

import { Alert } from 'types/Alert';

interface Props {
  setAlert: React.Dispatch<React.SetStateAction<Alert>>;
  payment: PaymentForm | undefined;
  setPayment: React.Dispatch<React.SetStateAction<PaymentForm>>;
  setPayments: React.Dispatch<React.SetStateAction<IPagamentos[]>>;
}

function Formulario({ setAlert, payment, setPayment, setPayments }: Props) {

  const onSubmit = async (e:React.SyntheticEvent) => {
    e.preventDefault();
    const service = new PaymentsService();
    console.log(!!payment?.id)
    if(!!payment?.id){
      const updatePayment = await service.update(payment.id, payment)
      console.log(updatePayment);
      if(updatePayment){
        setAlert({showMessage: true, message: 'Pagamento salvo com sucesso!'});
        resetPayment();
        setPayments(await service.get());
        setTimeout(() => {
              setAlert({
                showMessage: false,
                message: ''
              });
            }, 2500);
            return;
      }
      return;
    }
      const newPayment = await service.post(payment);
      setPayments((oldPayments) => [...oldPayments, newPayment]);
      setAlert({showMessage: true, message: 'Pagamento salvo com sucesso!'});
      resetPayment();
      setTimeout(() => {
            setAlert({
              showMessage: false,
              message: ''
            });
          }, 2500);

  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPayment( {...payment,[event.currentTarget.name]: event.currentTarget.value});

  }

  const resetPayment = () =>{
    setPayment({
      id: '',
      numero_nota: 0,
      vencimento: '',
      banco: '',
      cliente: '',
      valor: 0,
      data_pagamento: ''
    });
  }

  const handleReset = (e: React.SyntheticEvent) => {
    e.preventDefault();
    resetPayment();
  };

  return (
    <List>
      <div>
        <h2>Criar | Editar um Pagamento90</h2>
      </div>
      <form onSubmit={onSubmit}>
        <Form>
          <div>
            <input hidden
              disabled
              type="text"
              value={payment?.id}
              name="id"
            />
          </div>
          <div>
            <label>Nota Nº:</label>
            <input
              name='numero_nota'
              type="number"
              value={payment?.numero_nota}
              onChange={handleChange}
              min="0"
            />

          </div>
          <div>
            <label>Vencimento:</label>
            <input
             name='vencimento'
              value={payment?.vencimento}
              type="date"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Banco:</label>
            <input
              name='banco'
              value={payment?.banco}
              onChange={handleChange}
              type="text"
            />

          </div>
          <div>
            <label>Cliente:</label>
            <input
              name='cliente'
              value={payment?.cliente}
              type="text"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Valor R$: </label>
            <input
              name="valor"
              value={payment?.valor}
              onChange={handleChange}
              type="number"
              min="0"
              step=".01"
            />

          </div>
          <div>
            <label>Data Pgto:</label>
            <input
              value={payment?.data_pagamento}
              name="data_pagamento"
              onChange={handleChange}
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
