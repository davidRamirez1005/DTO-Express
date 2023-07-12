/* eslint-disable */
import express from 'express';
import { plainToClass } from 'class-transformer';
import {user} from '../controller/user.js'

const appEjemplo = express.Router();
appEjemplo.use(express.json());
/**
 *  ! Metodo GET
 */
appEjemplo.get('/', (req, res) => {
    try {
        let data = plainToClass(user, req.body)
        console.log(data);
        res.send('correcto')
    } catch (error) {
        res.send(error)
    };
});

export default appEjemplo;
