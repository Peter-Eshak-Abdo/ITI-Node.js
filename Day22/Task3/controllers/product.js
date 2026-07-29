const Product = require("../models/product.js");

const getProducts = async (req, res) => {
  try {
    const products = await Product.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving products", error: error.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name || !price) {
      return res
        .status(400)
        .json({ message: "Validation Error: Name and price are required" });
    }

    const newProduct = await Product.createProduct({ name, price });
    res
      .status(201)
      .json({ message: "Product added successfully", data: newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding product", error: error.message });
  }
};

module.exports = { getProducts, addProduct };
