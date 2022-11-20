//import { req, res } from "express";
// import { prismaClient } from "../database/prismaClient";

const prismaClient = require("../database/prismaClient");

module.exports = class ReadProducts {
  async handle(req, res) {
    // const {name,barcode, price} = req.body;

    const teste = await prismaClient.products.findMany({});
    // console.log(teste);
    return res.json(teste);
  }
};
