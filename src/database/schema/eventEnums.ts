import { pgTable, serial, varchar, integer, text, uniqueIndex } from "drizzle-orm/pg-core";

export const eventEnums = pgTable("event_enums", {
   id: serial("id").primaryKey(),
   owner_id: integer("owner_id").notNull().default(0),  // 0 = global, otherwise FK to games.id
   type: varchar("type", { length: 20 }).notNull(),     // e.g. 'int', 'string', 'decimal'
   name: varchar("name", { length: 50 }).notNull(),
   description: text("description")
}, (table) => [
   uniqueIndex("event_type_unique").on(table.owner_id, table.name)
]);