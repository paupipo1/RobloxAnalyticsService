import { pgTable, serial, timestamp, integer, text, numeric } from "drizzle-orm/pg-core";
import { eventEnums } from "./eventEnums";
import { playerSessions } from "./playerSessions.ts";

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  event_enum_id: integer("event_enum_id").notNull().references(() => eventEnums.id),
  player_session_id: integer("player_session_id").notNull().references(() => playerSessions.id),
  timestamp: timestamp("timestamp", { withTimezone: true }).notNull().defaultNow(),
  int_value: integer("int_value"),
  str_value: text("str_value"),
  decimal_value: numeric("decimal_value", { precision: 15, scale: 5 })
});