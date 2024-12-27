import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:3jHM1fXTNmdY@ep-frosty-hat-a5vnsjlh.us-east-2.aws.neon.tech/beat_cancer?sslmode=require"
);
export const db = drizzle(sql, { schema });
