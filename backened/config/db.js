import { neon } from '@neondatabase/serverless';

const DATABASE_URL = process.env.DATABASE_URL;

const sql = neon(DATABASE_URL);

// Test connection on startup
(async () => {
  try {
    await sql`SELECT 1`;
    console.log('✅ Connected to Neon database successfully!');
  } catch (error) {
    console.error('❌ Failed to connect to Neon database:', error.message);
  }
})();

export default sql;
