import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

if (!process.env.POSTGRES_URL) {
  throw new Error("Missing POSTGRES_URL");
}

const nonPoolingUrl = process.env.POSTGRES_URL.replace(":6543", ":5432");

dotenv.config({ path: "../../.env" });

export default {
  schema: "./schema.ts",
  dialect: "postgresql",
  dbCredentials: { url: nonPoolingUrl },
} satisfies Config;
