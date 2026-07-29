const { getDb } = require("../config/database.js");

const getAllProducts = async () => {
  const db = getDb();
  return await db.collection("products").find().toArray();
};

const createProduct = async (productData) => {
  const db = getDb();
  return await db.collection("products").insertOne(productData);
};

module.exports = { getAllProducts, createProduct };
