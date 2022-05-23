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

  static listarPorId = (req,res) =>{
    try {
      const id = req.params.id;
      const payment = Payments.findOne(id) 
      res.status(200).send(payment);
    } catch (error) {
     
      
    }  
  }

  static save = async (req, res) => {
    try {
      const payment = req.body;
      console.log(payment);
      await Payments.save(payment);
      res.status(201).send({message: 'Pagamento atualizado com sucesso'});
    } catch (error) {
      res.status(400).send({message: `Erro ao salvar, código: ${error}`});
    }

   
  }


  static atualizar = (req, res) => {
    const id = req.params.id;

    Payments.findByIdAndUpdate(id, {
      $set: req.body
    }, err =>{
      if(err){
        res.status(500).send({message: `Erro ao cadastrar o autor, código: ${err}`})
      }
      res.status(200).send({message: 'Autor atualizado com sucesso'});
    });
  }

  static excluir = (req,res) => {
    const id = req.params.id;

    Payments.delete(id, err =>{
      if(err){
        res.status(500).send({ message: `Erro ao cadastrar o autor, código: ${err.message}`});
      }
      res.status(200).send({message: 'Autor removido com sucesso!'})
    });
  }
}

export default PaymentsController;