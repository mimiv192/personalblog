import '@babel/polyfill';
import { join } from 'path';
import express from 'express';
import morgan from 'morgan';
import routes from './routes';
import stateRouting from './middleware/routing.mw';
import { createConnection } from 'net';
import router from './routes';



var app= express();

const CLIENT_PATH = join(__dirname, '../../client');







app.use(morgan('dev'));
app.use(express.static(CLIENT_PATH));
app.use(express.json());

app.use('/api', routes);

app.use(stateRouting);

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

