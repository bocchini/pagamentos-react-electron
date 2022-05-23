import Payments from '../models/Payments.js';

class PaymentsController{
  static listar = async (req, res) =>{
    try {
      const payments = await Payments.all();
      res.status(200).send(payments);
    } catch (error) {    
      res.status(400).send({message: `Erro ao listar os Pagamentos, código: ${error}`});
    }  
  };

  static listarPorId = async (req,res) =>{
    try {
      const id = req.params.id;
      const payment = await Payments.findOne(id) 
      res.status(200).send(payment);
    } catch (error) {
     
      
    }  
  }

  static save = async (req, res) => {
    try {
      const payment = req.body;
      res.status(201).send(await Payments.save(payment));
    } catch (error) {
      res.status(400).send({message: `Erro ao salvar o pagamento, código: ${error}`});
    }

   
  }

  static atualizar = async (req, res) => {
    try {
      const id = req.params.id;
      
      const paymentUpdated = await Payments.update(id, req.body);  
      res.status(200).send(paymentUpdated);
    } catch (error) {
      res.status(500).send({message: `Erro ao cadastrar o pagamento, código: ${error}`});
    }
}

  static excluir = async (req,res) => {
    try {
      const id = req.params.id;  
      await Payments.delete(id)
      res.status(200).send({message: 'Pagamento removido com sucesso!'});
    } catch (error) {
      res.status(500).send({ message: `Erro ao cadastrar o pagamento, código: ${error.message}`});
      
    }
  }
}

export default PaymentsController;