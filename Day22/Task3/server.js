const express = require("express");
const { connectToDb } = require("./config/database.js");
const productRoutes = require("./routes/product.js");

const app = express();

app.use(express.json());
app.use("/api", productRoutes);

connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("Server is running on port 3000 and connected to DB");
    });
  }
});
