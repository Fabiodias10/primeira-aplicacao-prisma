const express = require("express");
const router = require("./routes");

const dotenv = require("dotenv").config();

const app = express();

app.use(express.json());
app.use(router);

const port = process.env.PORT_SERVER;

console.log("Conectado no banco:", process.env.DATABASE_URL);

app.listen(port, () =>
  console.log(`Servidor conectado em: http://${process.env.DB_HOST}:${port}`)
);
