import { PrismaClient } from '../generated/prisma/client';

declare global {
  // Ensure the global object has a prisma property in development
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma; // Cache the Prisma client in development
}

export { prisma };