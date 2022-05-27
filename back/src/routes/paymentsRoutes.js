import express from 'express';

import PaymentsController from '../controllers/paymentsController.js';

const router = express.Router();

router
  .get('/payments', PaymentsController.listar)  
  .get('/payments/:id', PaymentsController.listarPorId)
  .post('/payments', PaymentsController.save)
  .put('/payments/:id', PaymentsController.atualizar)
  .delete('/payments/:id', PaymentsController.excluir);

export default router;