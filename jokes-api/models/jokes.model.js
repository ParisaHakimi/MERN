const mongoose = require("mongoose");
const jokeSchema = mongoose.schema({
  setup: { type: String },
  punchline: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});
const Joke = mongoose.model("Joke", jokeSchema);
module.export = Joke;
