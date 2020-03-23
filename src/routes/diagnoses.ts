import express from 'express';
import diagnosesServices from '../services/diagnoses';

const router = express.Router();

router.get('/', (_request, response) => {
  response.send(diagnosesServices.getDiagnoses());
});

export default router;
