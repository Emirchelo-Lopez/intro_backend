import express from "express";
import { PrismaClient } from "@prisma/client";
import { runSeed } from "./prisma/seed.js";
import colors from "colors";

// inicializar la app y prisma
const app = express();
const prisma = new PrismaClient();

//middleware para parsear JSON en las peticiones
app.use(express.json());

// ruta para mensaje de bienvenida
// req -> request
// res -> response
app.get("/", (req, res) => {
  res.send("🚀 Bienvenido a la API de express con Prisma");
});

// Get /users - obtener todos los usuarios
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    res.status(500).json({ error: "Algo salio mal al obtener los usuarios." });
  }
});

// Get /products - obtener todos los productos
app.get("/products", async (req, res) => {
  try {
    const products = await prisma.user.findMany(); // retrieves all products possible
    res.json(products);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    res.status(500).json({ error: "Algo salio mal al obtener los productos." });
  }
});

// Post /users - crear un nuevo usuario (SOLO EN EL ENTORNO DE DESARROLLO)
app.post("/seed", async (req, res) => {
  // Checks if we currently are in development mode, otherwise, redirects to this error message
  if (process.env.NODE_ENV !== "development") {
    return res.status(403).json({
      error: "Esta ruta solo está disponible en el entorno de desarrollo.",
    });
  }
  try {
    await runSeed();
    res.json({
      message: "Seed ejecutado exitosamente, usuarios insertados.",
    });
  } catch (error) {
    console.error("Error al insertar los datos:", error);
    res.status(500).json({ error: "Algo salió mal al insertar los datos." });
  }
});

// Post /users - crear nuevos productos (SOLO EN EL ENTORNO DE DESARROLLO)
app.post("/seed", async (req, res) => {
  // Checks if we currently are in development mode, otherwise, redirects to this error message
  if (process.env.NODE_ENV !== "development") {
    return res.status(403).json({
      error: "Esta ruta solo está disponible en el entorno de desarrollo.",
    });
  }
  try {
    await runSeed();
    res.json({
      message: "Seed ejecutado exitosamente, productos insertados.",
    });
  } catch (error) {
    console.error("Error al insertar los datos:", error);
    res.status(500).json({ error: "Algo salió mal al insertar los datos." });
  }
});

// inicializar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`.bgGrey);
});
