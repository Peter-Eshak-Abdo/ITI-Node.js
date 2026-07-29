const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.js");

router.get("/products", productController.getProducts);
router.post("/products", productController.addProduct);

module.exports = router;
