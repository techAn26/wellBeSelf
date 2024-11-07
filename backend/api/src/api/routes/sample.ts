import express from 'express';
import { getHello, postData } from '../controllers/sample';

const sampleRouter = express.Router();

sampleRouter.get('/', getHello);
sampleRouter.post('/data', postData);

export default sampleRouter;
