// server/src/config/db.js
import mysql from 'mysql2/promise';

export let db; // declare db first

export async function connectDB() {
  try {
    db = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'gown_shop'
    });
    console.log('✅ MySQL connected!');
  } catch (err) {
    console.error('❌ MySQL connection failed:', err);
    process.exit(1);
  }
}
