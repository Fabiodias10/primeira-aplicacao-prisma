const Router  = require("express");
const CreateProductController = require("./controllers/CreateProductController");
const CreateCategoryController = require("./controllers/CreateCategoryController");
const ReadProducts = require("./controllers/ReadProducts");

const router = Router();
const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const readProducts = new ReadProducts();

router.post("/product", createProduct.handle);

router.post("/category", createCategory.handle);

router.get("/readproducts", readProducts.handle);

module.exports = router;
