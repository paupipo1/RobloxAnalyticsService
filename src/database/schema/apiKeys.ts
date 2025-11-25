import { sql } from "drizzle-orm";
import { pgTable, serial, varchar, integer, jsonb, uniqueIndex, boolean, timestamp } from "drizzle-orm/pg-core";

import { games } from "./games";


export const apiKeys = pgTable("api_keys", {
   id: serial("id").primaryKey(),
   game_id: integer("game_id").notNull().references(() => games.id),  // FK to games
   hashed_key: varchar("hashed_key", { length: 64 }).notNull(),
   created_at: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
   updated_at: timestamp("updated_at", { withTimezone: true }),       // nullable, set on update
   last_used_at: timestamp("last_used_at", { withTimezone: true }),
   enabled: boolean("enabled").notNull().default(true),
   scopes: jsonb("scopes").notNull().default(sql`'[]'::jsonb`)
}, (table) => [
   uniqueIndex("api_keys_hash_uidx").on(table.hashed_key)
]);