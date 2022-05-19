
import pagamentos from 'data/payments.json';


export default class PaymentsService {
  get() {
    return pagamentos;
  }

  async post(pagamento:any){   
    await this.readPayment(pagamento);
  }

  async readPayment(data:any){
    // try {
    //   await jsonfile.writeFile('data/message.json', data);
    //   console.log('It\'s saved!');
    // } catch (err) {
    //   console.error(err);
    //   process.exit(1);
    // }
  }
}
// [
//   {
//     "id" : 1,
//     "numero_nota": 153,
//     "vencimento": "02/03/2020",
//     "banco": "Itaú",
//     "cliente": "XP Investimentos",
//     "valor": 152.52,
//     "data_pagamento": ""
//   },
//   {
//     "id" : 2,
//     "numero_nota": 1531,
//     "vencimento": "12/03/2020",
//     "banco": "Bradesco",
//     "cliente": "Banco ABC",
//     "valor": 52.52,
//     "data_pagamento": ""
//   },
//   {
//     "id" : 3,
//     "numero_nota": 31,
//     "vencimento": "12/05/2022",
//     "banco": "Itaú",
//     "cliente": "ZURIC",
//     "valor": 5500,
//     "data_pagamento": "12/05/2022"
//   }
// ]