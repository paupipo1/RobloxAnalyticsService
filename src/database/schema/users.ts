import { pgTable, serial, varchar, text } from "drizzle-orm/pg-core";
import { uniqueIndex } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
   id: serial("id").primaryKey(),               
   name: varchar("name", { length: 100 }).notNull(),
   email: varchar("email", { length: 255 }).notNull(),
   hashed_password: text("hashed_password").notNull()
}, (table) => [
   uniqueIndex("users_email_uidx").on(table.email)
]);