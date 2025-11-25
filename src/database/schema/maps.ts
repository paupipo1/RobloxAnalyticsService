import { primaryKey, pgTable, integer, varchar } from "drizzle-orm/pg-core";
import { games } from "./games";

export const maps = pgTable("maps", {
   id: integer("id").notNull(),
   game_id: integer("game_id").notNull().references(() => games.id),
   name: varchar("name", { length: 100 }).notNull()
}, (table) => [
   primaryKey(table.game_id, table.id)   // Composite PK: ensures unique per game:contentReference[oaicite:19]{index=19}
])