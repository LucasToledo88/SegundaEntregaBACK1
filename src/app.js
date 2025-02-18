// importar librerias
import express from "express";
import exphbs from "express-handlebars";
// importar routers
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
// importar vistas
import viewsRouter from "./routes/views.router.js";
import { Server } from "socket.io";

const app = express();
const PORT = 8080;

// Server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"));

// Express-Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

// Rutas
app.use("/api", productsRouter);
app.use("/api", cartsRouter);

// Rutas
app.use("/", viewsRouter);

// Iniciamos servidor
const httpServer= app.listen(PORT, () => {
    console.log(`Servidor Listo y Escuchando en el puerto ${PORT}.`);
});

// Iniciamos servidor de sockets
const socketServer = new Server(httpServer);

socketServer.on('connection', socket => {
  console.log('Nuevo cliente conectado.');

  socket.on('message', data => {
    console.log(`Soy la data ${data}`);
  });
});
