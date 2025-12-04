import { neon } from "@neondatabase/serverless";

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

export const sql = neon(
  "postgresql://neondb_owner:npg_uSLC6ciDr9YN@ep-old-dream-adclu4jq-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
);
