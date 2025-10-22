// database/config/db.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const {
  DB_HOST = 'database',
  DB_USER = 'gown_user',
  DB_PASSWORD = 'gown_pass',
  DB_NAME = 'gown_shop',
  DB_PORT = 3306
} = process.env;

let dbConnection; // shared, module-scoped connection

export async function connectDB() {
  if (dbConnection) return dbConnection; // reuse if already connected

  for (let i = 0; i < 10; i++) {
    try {
      dbConnection = await mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        port: DB_PORT
      });
      console.log(`✅ MySQL connected → ${DB_HOST}/${DB_NAME}`);
      return dbConnection;
    } catch (err) {
      console.log(`⚠️ DB not ready yet, retrying... (${i+1}/10)`);
      await new Promise(r => setTimeout(r, 3000));
    }
  }

  console.error('❌ MySQL connection failed');
  process.exit(1);
}

export function getDB() {
  if (!dbConnection) throw new Error('Database not connected. Call connectDB() first.');
  return dbConnection;
}
