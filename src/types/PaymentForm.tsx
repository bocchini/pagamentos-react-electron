export type PaymentForm = {
  id? : string,
  numero_nota?: number,
  vencimento?: string,
  banco?: string,
  cliente?: string,
  valor?: number,
  data_pagamento?: string
}