import express from 'express';
import bodyParser from 'body-parser';

import index from './routes/index.js';
import flights from './routes/flights.js';
import stays from './routes/stays.js';
import accounts from './routes/accounts.js';

import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb+srv://usp:usp@webdilvan.ug0i0bq.mongodb.net/web?retryWrites=true&w=majority');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const router = express.Router();

app.use('/', index);
app.use('/flights', flights);
app.use('/stays', stays);
app.use('/accounts', accounts);

export default app;
