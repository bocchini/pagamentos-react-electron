import api from './api';

export default class PaymentsService {
  async get() {
    const response  = await api.get('payments');
    return response.data;
  }

  async post(pagamento:any){
    const response = await api.post('payments', pagamento,  {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  }

  async getById(id:string){
    const response = await api.get(`payments/${id}`);
    return response.data;
  }

 async delete(id:string) {
   const response = await api.delete(`payments/${id}`);
   return response.status;
 }
}
