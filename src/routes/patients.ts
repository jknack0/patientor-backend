import express from 'express';
import patientServices from '../services/patients';

const router = express.Router();

router.get('/', (_request, response) => {
  response.json(patientServices.getNonSensitivePatients());
});

export default router;
