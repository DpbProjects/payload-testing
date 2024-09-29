import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "page" RENAME TO "pages";
  ALTER TABLE "pages" RENAME COLUMN "name" TO "title";
  DROP INDEX IF EXISTS "page_created_at_idx";
  CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" USING btree ("created_at");
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "content";`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "pages" RENAME TO "page";
  ALTER TABLE "page" RENAME COLUMN "title" TO "name";
  DROP INDEX IF EXISTS "pages_created_at_idx";
  ALTER TABLE "page" ADD COLUMN "content" jsonb NOT NULL;
  CREATE INDEX IF NOT EXISTS "page_created_at_idx" ON "page" USING btree ("created_at");`)
}
