import { mysqlTable, serial, text, varchar } from 'drizzle-orm/mysql-core';
import { z } from 'zod';

export const users = mysqlTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  bio: text('bio')
});

export const userSchema = z.object({
  id: z.number(),
  name: z.string().min(1),
  email: z.string().email(),
  bio: z.string().optional()
});
