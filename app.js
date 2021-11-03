import express from 'express';
import helmet from 'helmet';
import pkg from 'mongoose';
const { connect } = pkg;
import 'dotenv/config';


const app = express();
app.use(helmet());

//ROUTES
import indexRouter from './routes/index.js';
import testRouter from './routes/test.js';

//Db connection
connect(process.env.DB_CONNECTION);
console.log('connect db!');


app.use('/', indexRouter);
app.use('/test', testRouter);
app.listen(3000);