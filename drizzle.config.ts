import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema.ts',
  out: './drizzle/migrations',
  dialect: 'mysql',
  dbCredentials: {
    host: 'mysql',
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'sample_react_admin_dev'
  }
} satisfies Config;
