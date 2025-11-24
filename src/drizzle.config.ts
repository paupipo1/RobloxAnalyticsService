import "dotenv/config"
import {defineConfig} from "drizzle-kit"
import fs from "fs"

export default defineConfig({
   out: './drizzle',
   schema: './database/schema/*',
   dialect: 'postgresql',
   dbCredentials: {
      host: process.env.DATABASE_HOST!,
      port: Number(process.env.DATABASE_PORT!),
      user: process.env.DATABASE_USER!,
      password: process.env.DATABASE_PASSWORD!,
      database: process.env.DATABASE_NAME!,
      ssl: {
         rejectUnauthorized: true,
         ca: fs.readFileSync("../global-bundle.pem").toString(),
      }
   }
})