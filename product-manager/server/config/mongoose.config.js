const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/productDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("established a connection to the database"))
  .catch((err) => console.log(err));
