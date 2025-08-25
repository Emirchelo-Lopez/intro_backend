// importar el cliente de Prisma para interactuar con la base de datos
import { PrismaClient } from "@prisma/client";
// instanciar el cliente de Prisma
const prisma = new PrismaClient();

//Funcion principal para que ejecute el seeding (sembrar/sembrado) de datos
export async function runSeed() {
  console.log("Iniciando el proceso de siembra de datos...");
  // limpiar la base de datos antes de insertar/sembrar datos nuevos
  try {
    // eliminar todos los registros existentes en la tabla User
    await prisma.user.deleteMany();
    console.log("Base de datos limpiada correctamente.");
    // insertar multiples datos de usuarios de prueba en la tabla User
    const result = await prisma.user.createMany({
      data: [
        { name: "Alice", last_name: "Johnson", email: "alice@example.com" },
        { name: "Bob", last_name: "Williams", email: "bob@example.com" },
        { name: "Charlie", last_name: "Brown", email: "charlie@example.com" },
        { name: "Diana", last_name: "Jones", email: "diana@example.com" },
        { name: "Ethan", last_name: "Garcia", email: "ethan@example.com" },
        { name: "Fiona", last_name: "Miller", email: "fiona@example.com" },
        { name: "George", last_name: "Davis", email: "george@example.com" },
        { name: "Hannah", last_name: "Rodriguez", email: "hannah@example.com" },
        { name: "Diego", last_name: "Martinez", email: "diego@example.com" },
        { name: "Jorge", last_name: "Hernandez", email: "jorge@example.com" },
        { name: "Emir", last_name: "Lopez", email: "emir@example.com" },
        {
          name: "Guillermo",
          last_name: "Gonzalez",
          email: "guillermo@example.com",
        },
      ],
    });

    // insertar productos
    const productsResult = await prisma.product.createMany({
      data: [
        {
          name: "Laptop Dell",
          description: "Laptop para trabajo y gaming",
          price: 25000.0,
          stock: 10,
        },
        {
          name: "Mouse Inalámbrico",
          description: "Mouse ergonómico inalámbrico",
          price: 500.0,
          stock: 50,
        },
        {
          name: "Teclado Mecánico",
          description: "Teclado mecánico RGB",
          price: 1500.0,
          stock: 25,
        },
        {
          name: 'Monitor 24"',
          description: "Monitor Full HD 24 pulgadas",
          price: 3500.0,
          stock: 15,
        },
        {
          name: "Smartphone",
          description: "Smartphone con cámara de alta resolución",
          price: 8000.0,
          stock: 30,
        },
        {
          name: "Audífonos Bluetooth",
          description: "Audífonos inalámbricos con cancelación de ruido",
          price: 2000.0,
          stock: 40,
        },
        {
          name: "Tablet",
          description: "Tablet para lectura y entretenimiento",
          price: 4500.0,
          stock: 20,
        },
        {
          name: "Cámara Web",
          description: "Cámara web HD para videollamadas",
          price: 800.0,
          stock: 35,
        },
      ],
    });

    // muestra en consola cuantos usuarios fueron creados/insertados
    console.log(
      `se insertaron ${result.count} usuarios creados correctamente.`
    );

    // muestra en consola cuantos productos fueron insertados
    console.log(
      `se insertaron ${productsResult.count} productos correctamente`
    );
  } catch (error) {
    // captura y muestra cualquier error que ocurra durante el proceso
    console.error("Error al ejecutar el seed:", error);
  } finally {
    // cierra la conexion con la base de datos
    await prisma.$disconnect();
    console.log("Conexión con la base de datos cerrada.");
  }
}

// ejecutamos la funcion de seeding directamente
runSeed();
