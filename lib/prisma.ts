import { PrismaClient } from '@/prisma/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

declare global {
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

// Strip sslmode from connection string to allow programmatic SSL config
const connectionString = process.env.DATABASE_URL?.replace(/[?&]sslmode=[^&]+/, '') || '';

// Create a connection pool
const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

const adapter = new PrismaPg(pool);

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient({ log: ['query'], adapter });
} else {
  // Lazy-load Prisma for dev (Turbopack)
  if (!global.prisma) {
    global.prisma = new PrismaClient({ log: ['query'], adapter });
  }
  prisma = global.prisma;
}

export { prisma };