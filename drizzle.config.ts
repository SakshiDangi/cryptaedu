// import type { Config } from "drizzle-kit";
// import 'dotenv/config'

export default {
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL,
    connectionString:process.env.DATABASE_URL,
  },
} 
// satisfies Config;
