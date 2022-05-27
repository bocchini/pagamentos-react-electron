import express from 'express';

import paymentsRoutes from './paymentsRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({server: 'Ok'});
  });
  app.use(
    express.json(),
    paymentsRoutes,
    );
}

export default routes;