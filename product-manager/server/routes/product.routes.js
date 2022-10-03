const productController = require("../controllers/product.controller");
module.exports = (app) => {
  app.get("/api/products", productController.getAllProducts);
  app.get("/api/products/:id", productController.getOneProduct);
  app.post("/api/products", productController.createNewProduct);
  app.put("/api/products/:id", productController.UpdateExistingProduct);
  app.delete("/api/products/:id", productController.deleteProduct);
};
