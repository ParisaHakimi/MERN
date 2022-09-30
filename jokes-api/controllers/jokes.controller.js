const Joke = require("../models/jokes.model");
// get all jokes
const getAllJokes = (req, res) => {
  Joke.find()
    .then((result) => res.json(result))
    .catch((err) => {
      console.log(err);
    });
};
// create a new joke
const createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then((result) => res.json(result))
    .catch((err) => {
      console.log(err);
    });
};
// return a single joke matching this _id
const findOneSngleJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => {
      console.log(err);
    });
};
// update a single joke matching this _id
const updateSingleJoke=(req,res)=>{
    Joke.findOneAndUpdate({_id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => {
      console.log(err);
    });
}
// delete a single joke matching this _id
const deleteSingleJoke=(req,res)=>{
    Joke.deleteOne({_id: req.params.id})
    .then((result) => res.json(result))
    .catch((err) => {
      console.log(err);
    });
}

module.export={getAllJokes,createNewJoke,findOneSngleJoke,updateSingleJoke,deleteSingleJoke}