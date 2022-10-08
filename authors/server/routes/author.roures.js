const AuthorController = require("../controllers/author.controller");
module.exports = (app) => {
  app.get("/api/allAuthors", AuthorController.getAllAuthors);
  app.get("/api/author/:id", AuthorController.getOneAuthor);
  app.put("/api/editAuthor/:id", AuthorController.editAuthor);
  app.post("/api/addAuthor", AuthorController.createAuthor);
  app.delete("/api/deletAuthor/:id", AuthorController.deleteOneAuthor);
};
