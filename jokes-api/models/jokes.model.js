const mongoose = require("mongoose");
const jokeSchema = mongoose.Schema({
  setup: { type: String },
  punchline: { type: String },
  createdAt: { type: Number },
  updatedAt: { type: Number },
});
const Joke = mongoose.model("Joke", jokeSchema);
module.exports = Joke;
