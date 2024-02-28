import express from 'express';
import cors from 'cors';
import router from './Routes/router';

const app = express();

app.use((req, res, next) => {
    console.log(`Solicitud recibida en: ${req.method} ${req.url}`);
    next();
});

app.use(cors());
app.use(express.json());
app.use(router);

export default app;
