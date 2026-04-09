import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  phoneNumber: text("phone_number"),
  cvUrl: text("cv_url"),
  experience: text("experience"),
  jobTitle: text("job_title"),
  linkedIn: text("linked_in"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  phoneNumber: true,
  cvUrl: true,
  experience: true,
  jobTitle: true,
  linkedIn: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
