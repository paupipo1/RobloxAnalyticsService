import { jsonb } from "drizzle-orm/pg-core";
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";


export const games = pgTable("games", {
   id: serial("id").primaryKey(),
   name: varchar("name", { length: 100 }).notNull(),
   settings_json: jsonb("settings_json").notNull().default(`{}`)
});