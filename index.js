import express from "express";
import colors from "colors";

// inicializar la app
const app = express();

//middleware para parsear JSON en las peticiones
app.use(express.json());

// ruta para mensaje de bienvenida
// req -> request
// res -> response
app.get("/", (req,res) => {
  res.send("🚀 Bienvenido a la API de express con Prisma")
})

app.get("/users", (req,res) => {
  res.send("Aqui podria ir una lista de usuarios")
})

// inicializar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`.bgGrey);
})
