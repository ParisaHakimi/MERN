const Product = require("../models/product.model");

const getAllProducts = (req, res) => {
  Product.find({})
    .then((result) => {
      console.log(result)
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
const getOneProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
const createNewProduct = (req, res) => {
  Product.create(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
const UpdateExistingProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
const deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  UpdateExistingProduct,
  deleteProduct,
};
