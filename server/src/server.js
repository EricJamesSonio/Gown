import app from './app.js';
import { connectDB } from './config/db.js';

const PORT = process.env.PORT || 5000;

async function startServer() {
  await connectDB(); // Ensure DB connection before starting server
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

startServer();
