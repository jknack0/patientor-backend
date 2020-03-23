import express from 'express';
import diagnosesRouter from './routes/diagnoses';
import patientRouter from './routes/patients';

const app = express();
const PORT = 3001;

app.use(express.json());

app.use('/api/diagnoses', diagnosesRouter);
app.use('/api/persons', patientRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
