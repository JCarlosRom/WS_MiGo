import express, { json } from 'express';
import morgan from 'morgan';

const app = express();

// settings
app.set('SERVER_HOST', process.env.SERVER_HOST || '127.0.0.1');
app.set('HTTP_PORT', process.env.HTTP_PORT || 3000);
app.set('DB_USER', process.env.DB_USER);
app.set('DB_HOST', process.env.DB_HOST);
app.set('DB', process.env.DB);
app.set('DB_PASS', process.env.DB_PASS);
app.set('PORT', process.env.PORT);

//importing routes
import walletRoutes from './routes/billetera';
import fleetRoutes from './routes/inicio_fleet';

//middlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/billetera', walletRoutes);
app.use('/inicio_fleet', fleetRoutes);

export default app;
