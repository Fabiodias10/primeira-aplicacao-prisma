//import { req, res } from "express";
// import { prismaClient } from "../database/prismaClient";

const prismaClient = require("../database/prismaClient");

module.exports = class CreateProductController {
  async handle(req, res) {
    const { name, barcode, price } = req.body;
          
    const products = await prismaClient.products.create({
      data: {
        name,
        price,
        barcode,
      },
    });

    return res(200).json(products);
  }
};
