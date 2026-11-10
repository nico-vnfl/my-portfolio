// décrit la structure de la table
// ce fichier doit etre le seul a etre changé a l'exam puis push

import { boolean, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const tasksTable = pgTable("tasks", {
  id: uuid().defaultRandom().primaryKey(),
  title: text().notNull(),
  done: boolean().default(false).notNull(),
});

export const articlesTable = pgTable("articles", {
  id: uuid().defaultRandom().primaryKey(),
  title: text().notNull(),
  content: text().notNull(), // content rajouté pour ajouter une ligne a la table
  done: boolean().default(false).notNull(),
});

// après chaque changement dans shcema, run "npx drizzle-kit push"
