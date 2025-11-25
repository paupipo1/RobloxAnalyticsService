import {pgTable, integer, serial, timestamp, doublePrecision, smallint } from "drizzle-orm/pg-core";
import { playerSessions } from "./playerSessions";

export const positionSamples = pgTable("position_samples", {
   id: serial("id").primaryKey(),
   player_session_id: integer("player_session_id").notNull().references(() => playerSessions.id),
   map_id: integer("map_id").notNull(),
   timestamp: timestamp("timestamp", { withTimezone: true }).defaultNow().notNull(),
   x: doublePrecision("x").notNull(),
   y: doublePrecision("y").notNull(),
   z: doublePrecision("z").notNull(),
   rotation: smallint("rotation").notNull() //store rotation as 
}, (table) => [
   // Foreign key reference to maps: ensure (game_id, map_id) matches an entry in maps table
   // (Drizzle doesn't directly support multi-col FK in this context, so we rely on data integrity via application or triggers)
]);