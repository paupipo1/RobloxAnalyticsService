import { pgTable, serial, timestamp, integer, text, numeric } from "drizzle-orm/pg-core";
import { users } from "./users";
import { games } from "./games";

export const playerSessions = pgTable("player_sessions", {
   id: serial("id").primaryKey(),
   user_id: integer("user_id").notNull().references(() => users.id),
   game_id: integer("game_id").notNull().references(() => games.id),
   started_at: timestamp("started_at", { withTimezone: true }).defaultNow().notNull(),
   ended_at: timestamp("ended_at", { withTimezone: true })
});