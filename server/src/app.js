// server/src/app.js
import express from 'express';
import cors from 'cors';
import gownRoutes from './routes/gown.routes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/gowns', gownRoutes);

// Error middleware
app.use(errorHandler);

export default app;
