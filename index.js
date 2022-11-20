const express = require("express");
const router = require("./routes");

const dotenv = require("dotenv").config();

const app = express();

app.use(express.json());
app.use(router);

const port = process.env.PORTA;

console.log(process.env.SENHA);

app.listen(port, () => console.log(`Conectado na porta: ${port}`));
