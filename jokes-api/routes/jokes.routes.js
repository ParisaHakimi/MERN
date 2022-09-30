const JokeController = require("../controllers/jokes.controller");
module.exports = (app) => {
  app.get("/api/jokes", JokeController.getAllJokes);
  app.post("/api/jokes", JokeController.createNewJoke);
  app.get("/api/jokes/:_id", JokeController.findOneSngleJoke);
  app.put("/api/jokes/:_id", JokeController.updateSingleJoke);
  app.delete("/api/jokes/:_id", JokeController.deleteSingleJoke);
};
