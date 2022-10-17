const Author = require("../models/author.model");
module.exports = {
  getAllAuthors: (req, res) => {
    Author.find()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  getOneAuthor: (req, res) => {
    Author.findById(req.params.id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  editAuthor: (req, res) => {
    Author.updateOne({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  createAuthor: (req, res) => {
    Author.create(req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  deleteOneAuthor: (req, res) => {
    Author.deleteOne({ _id: req.params.id })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};
