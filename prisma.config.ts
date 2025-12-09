import { defineConfig, env } from "prisma/config";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  migrations: {
    path: "prisma/migrations",
    seed: `tsx prisma/seed.ts`,
  },
  schema: "./prisma/schema.prisma",
  datasource: {
    url: env("DATABASE_URL"),
  },
});

