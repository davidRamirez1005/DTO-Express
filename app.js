/* eslint-disable */
import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import { servidor } from './server/db.js';
import appEjemplo from './routers/ejemplo.js';

/* eslint-enable */
dotenv.config();
const appExpress = express();

appExpress.use(express.json());

appExpress.use('/', appEjemplo);
// appExpress.use('/totales', appProductos);
// appExpress.use('/inventarios', appInventarios);
// appExpress.use('/relacionados',appRelacionados)

appExpress.listen(servidor.port, () => {
  // eslint-disable-next-line
  console.log(`http://${servidor.addresses}:${servidor.port}/ \n`);
});

export default appExpress;
