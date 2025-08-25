import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const prisma = new PrismaClient();

async function testDatabase() {
  try {
    console.log("🔍 Testing database connection...");
    console.log("📝 DATABASE_URL:", process.env.DATABASE_URL);

    // Test connection
    await prisma.$connect();
    console.log("✅ Database connection successful!");

    // Test query
    const result = await prisma.$queryRaw`SELECT current_database(), version()`;
    console.log("✅ Database query successful:", result);
  } catch (error) {
    console.error("❌ Database connection failed:");
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

testDatabase();
