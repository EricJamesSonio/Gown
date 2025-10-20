import express from 'express';
import gownRoutes from './routes/gown.routes.js';
import userRoutes from './routes/user.routes.js';
import cartRoutes from './routes/cart.routes.js'; // <-- add this
import orderRoutes from "./routes/order.routes.js";
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(express.json());
app.use('/api/gowns', gownRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes); // <-- mount cart routes
app.use('/api/orders', orderRoutes);

app.use(errorHandler);

export default app;
