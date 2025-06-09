import { PrismaClient } from "@prisma/client";

// Use let instead of var for the global declaration
const globalForPrisma = global as { prisma?: PrismaClient };

// Create a new PrismaClient if one doesn't exist
const prisma = globalForPrisma.prisma || new PrismaClient();

// In development, save the PrismaClient in the global object to prevent multiple instances
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
