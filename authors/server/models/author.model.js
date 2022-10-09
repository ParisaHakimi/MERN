const mongoose = require("mongoose");
const AuthorSchema = mongoose.Schema(
  {
    authorName: {
      type: String,
      required: [true, "Name is required"],
      minLength: [3, "Must be at least 3 characters"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Author", AuthorSchema);
