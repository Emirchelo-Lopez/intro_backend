// importar el cliente de Prisma para interactuar con la base de datos
import { PrismaClient } from '@prisma/client';
// instanciar el cliente de Prisma
const prisma = new PrismaClient();

//Funcion principal para que ejecute el seeding (sembrar/sembrado) de datos
export async function runSeed() {
  console.log("Iniciando el proceso de siembra de datos...");
  // limpiar la base de datos antes de insertar/sembrar datos nuevos
  try{
  // eliminar todos los registros existentes en la tabla User
  await prisma.user.deleteMany();
  console.log("Base de datos limpiada correctamente.");
  // insertar multiples datos de usuarios de prueba en la tabla User
  const result = await prisma.user.createMany({
       data: [
        { name: "Alice", last_name: "Smith", email: "alice@example.com" },
        { name: "Bob", last_name: "Smith", email: "bob@example.com" },
        { name: "Charlie", last_name: "Smith", email: "charlie@example.com" },
        { name: "Diana", last_name: "Smith", email: "diana@example.com" },
        { name: "Ethan", last_name: "Smith", email: "ethan@example.com" },
        { name: "Fiona", last_name: "Smith", email: "fiona@example.com" },
        { name: "George", last_name: "Smith", email: "george@example.com" },
        { name: "Hannah",last_name: "Smith", email: "hannah@example.com" },
        { name: "Diego", last_name: "Smith",email: "diego@example.com" },
        { name: "Jorge", last_name: "Smith", email: "jorge@example.com" },
        { name: "Emir", last_name: "Smith",email: "emir@example.com" },
        { name: "Guillermo", last_name: "Smith", email: "guillermo@example.com" }
    ],
  })
  // muestra en consola cuantos usuarios fueron creados/insertados
  console.log(`se insertaron ${result.count} usuarios creados correctamente.`);
  }catch(error){
    // captura y muestra cualquier error que ocurra durante el proceso
    console.error("Error al ejecutar el seed:", error)
  }finally {
    // cierra la conexion con la base de datos
    await prisma.$disconnect();
    console.log("Conexión con la base de datos cerrada.");
  }
}

// ejecutamos la funcion de seeding directamente
runSeed();


